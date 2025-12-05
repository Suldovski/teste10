using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDbContext>();

builder.Services.AddCors(options =>
    options.AddPolicy("Acesso Total",
        configs => configs
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod())
);

var app = builder.Build();

app.MapGet("/", () => "API IMC - Luan Suldovski");

app.MapPost("/api/imc/cadastrar", ([FromServices] AppDbContext ctx, [FromBody] Imc imc) =>
{
    if (imc.Altura <= 0 || imc.Peso <= 0)
    {
        return Results.BadRequest("Altura e peso devem ser números positivos.");
    }

    imc.ImcValor = imc.Peso / (imc.Altura * imc.Altura);
    
    if (imc.ImcValor < 18.5)
        imc.Classificacao = "Magreza";
    else if (imc.ImcValor >= 18.5 && imc.ImcValor <= 24.9)
        imc.Classificacao = "Normal";
    else if (imc.ImcValor >= 25 && imc.ImcValor <= 29.9)
        imc.Classificacao = "Sobrepeso";
    else if (imc.ImcValor >= 30 && imc.ImcValor <= 34.9)
        imc.Classificacao = "Obesidade I";
    else if (imc.ImcValor >= 35 && imc.ImcValor <= 39.9)
        imc.Classificacao = "Obesidade II";
    else
        imc.Classificacao = "Obesidade III (grave)";

    imc.DataCriacao = DateTime.Now;
    ctx.Imcs.Add(imc);
    ctx.SaveChanges();
    return Results.Created($"/api/imc/{imc.ImcId}", imc);
});

app.MapGet("/api/imc/listar", ([FromServices] AppDbContext ctx) =>
{
    if (ctx.Imcs.Any())
    {
        return Results.Ok(ctx.Imcs.ToList());
    }
    return Results.Ok(new List<Imc>());
});

app.MapGet("/api/imc/listarporstatus/{classificacao}", ([FromServices] AppDbContext ctx, [FromRoute] string classificacao) =>
{
    var registros = ctx.Imcs
        .Where(x => x.Classificacao!.ToLower().Contains(classificacao.ToLower()))
        .ToList();
    
    return Results.Ok(registros);
});

app.MapPut("/api/imc/alterar/{id}", ([FromServices] AppDbContext ctx, [FromRoute] string id, [FromBody] Imc imcAtualizado) =>
{
    Imc? imc = ctx.Imcs.Find(id);
    if (imc is null)
    {
        return Results.NotFound("Registro não encontrado!");
    }

    if (imcAtualizado.Altura <= 0 || imcAtualizado.Peso <= 0)
    {
        return Results.BadRequest("Altura e peso devem ser números positivos.");
    }

    imc.Altura = imcAtualizado.Altura;
    imc.Peso = imcAtualizado.Peso;
    imc.ImcValor = imc.Peso / (imc.Altura * imc.Altura);
    
    if (imc.ImcValor < 18.5)
        imc.Classificacao = "Magreza";
    else if (imc.ImcValor >= 18.5 && imc.ImcValor <= 24.9)
        imc.Classificacao = "Normal";
    else if (imc.ImcValor >= 25 && imc.ImcValor <= 29.9)
        imc.Classificacao = "Sobrepeso";
    else if (imc.ImcValor >= 30 && imc.ImcValor <= 34.9)
        imc.Classificacao = "Obesidade I";
    else if (imc.ImcValor >= 35 && imc.ImcValor <= 39.9)
        imc.Classificacao = "Obesidade II";
    else
        imc.Classificacao = "Obesidade III (grave)";

    ctx.Imcs.Update(imc);
    ctx.SaveChanges();
    return Results.Ok(imc);
});

app.UseCors("Acesso Total");
app.Run();
