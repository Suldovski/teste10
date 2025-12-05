namespace API.Models;

public class Imc
{
    public Imc()
    {
        ImcId = Guid.NewGuid().ToString();
        DataCriacao = DateTime.Now;
    }

    public string ImcId { get; set; }
    public string? Nome { get; set; }
    public double Altura { get; set; }
    public double Peso { get; set; }
    public double ImcValor { get; set; }
    public string? Classificacao { get; set; }
    public DateTime DataCriacao { get; set; }
}
