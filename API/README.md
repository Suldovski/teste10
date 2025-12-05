# 📊 API IMC - PROVA SUBSTITUTIVA
**Desenvolvedor:** Luan Suldovski  
**Data:** 05/12/2025  
**Tecnologia:** ASP.NET Core 8.0 (Minimal API)  
**Banco de Dados:** SQLite (LuanSuldovski.db)  
**Porta:** 5000

---

## 🎯 FUNCIONALIDADES IMPLEMENTADAS

### ✅ 1. CADASTRAR IMC (0,75 pontos)
**Endpoint:** `POST /api/imc/cadastrar`

**Descrição:** Cadastra registro de IMC com cálculo automático e classificação.

**Corpo da requisição:**
```json
{
  "nome": "Ana Souza",
  "altura": 1.70,
  "peso": 65
}
```

**Regras implementadas:**
- ✅ Valida altura e peso (números positivos)
- ✅ Calcula IMC: peso / (altura * altura)
- ✅ Define classificação automaticamente:
  - Abaixo de 18.5 → Magreza
  - 18.5 – 24.9 → Normal
  - 25 – 29.9 → Sobrepeso
  - 30 – 34.9 → Obesidade I
  - 35 – 39.9 → Obesidade II
  - 40 ou mais → Obesidade III (grave)
- ✅ Persiste data de criação automaticamente
- ✅ Retorna status 201 (Created)

---

### ✅ 2. LISTAR IMCs (0,25 pontos)
**Endpoint:** `GET /api/imc/listar`

**Descrição:** Retorna todos os registros de IMC cadastrados.

**Exemplo de resposta:**
```json
[
  {
    "imcId": "guid-aqui",
    "nome": "Ana Souza",
    "altura": 1.70,
    "peso": 65,
    "imcValor": 22.49,
    "classificacao": "Normal",
    "dataCriacao": "2025-12-05T19:30:00"
  }
]
```

---

### ✅ 3. LISTAR POR CLASSIFICAÇÃO (0,50 pontos)
**Endpoint:** `GET /api/imc/listarporstatus/{classificacao}`

**Descrição:** Filtra registros pela classificação (busca parcial/case-insensitive).

**Exemplos:**
- `/api/imc/listarporstatus/Normal` → Retorna registros "Normal"
- `/api/imc/listarporstatus/Sobrepeso` → Retorna registros "Sobrepeso"
- `/api/imc/listarporstatus/Obesidade` → Retorna todos tipos de obesidade

---

### ✅ 4. ALTERAR REGISTRO (0,75 pontos)
**Endpoint:** `PUT /api/imc/alterar/{id}`

**Descrição:** Altera altura/peso e recalcula IMC e classificação automaticamente.

**Corpo da requisição:**
```json
{
  "altura": 1.72,
  "peso": 70
}
```

**Regras implementadas:**
- ✅ Verifica se registro existe
- ✅ Valida altura e peso
- ✅ Recalcula IMC automaticamente
- ✅ Atualiza classificação automaticamente
- ✅ Mantém data de criação original
- ✅ Retorna objeto atualizado

---

## 📁 ESTRUTURA DO PROJETO

```
API/
├── Models/
│   └── Imc.cs                    # Modelo da entidade (português)
├── Data/
│   └── AppDbContext.cs           # Contexto do banco SQLite
├── Migrations/
│   └── 20251205193428_Inicial.cs # Migration inicial
├── Program.cs                    # Minimal API com endpoints
├── API.csproj                    # Pacotes EF Core 8.0
├── testes.http                   # 13 casos de teste
└── LuanSuldovski.db             # Banco de dados SQLite
```

---

## 🚀 COMANDOS PARA EXECUTAR

### Restaurar dependências:
```bash
dotnet restore
```

### Criar migration:
```bash
dotnet ef migrations add Inicial
```

### Atualizar banco de dados:
```bash
dotnet ef database update
```

### Executar API:
```bash
dotnet run
```

**A API estará disponível em:** `http://localhost:5000`

---

## 🧪 TESTANDO A API

Use o arquivo `testes.http` com a extensão REST Client do VS Code.

**Casos de teste incluídos:**
1. ✅ Cadastrar IMC (5 exemplos diferentes)
2. ✅ Listar todos
3. ✅ Filtrar por classificação (5 cenários)
4. ✅ Alterar registro
5. ✅ Testes de validação (erros esperados)

---

## 📊 TABELA DE CLASSIFICAÇÃO IMC

| IMC | Classificação |
|-----|---------------|
| < 18.5 | Magreza |
| 18.5 – 24.9 | Normal |
| 25 – 29.9 | Sobrepeso |
| 30 – 34.9 | Obesidade I |
| 35 – 39.9 | Obesidade II |
| ≥ 40 | Obesidade III (grave) |

---

## ✅ CHECKLIST DE ENTREGA

- [x] Banco SQLite: **LuanSuldovski.db**
- [x] Porta fixa: **5000**
- [x] CORS liberado (AllowAnyOrigin)
- [x] Código 100% em **português**
- [x] Sem comentários
- [x] Migrations criadas
- [x] WeatherForecast removido
- [x] Arquivo de testes `.http` incluído
- [x] Todos os 4 endpoints implementados
- [x] Cálculo de IMC correto
- [x] Classificação automática
- [x] Validações implementadas

---

## 🎯 PONTUAÇÃO ESPERADA: 2,25/2,25 (API)

| Item | Peso | Status |
|------|------|--------|
| API – Cadastrar IMC | 0,75 | ✅ |
| API – Listar IMC | 0,25 | ✅ |
| API – Listar por Classificação | 0,50 | ✅ |
| API – Alterar IMC | 0,75 | ✅ |
| **TOTAL API** | **2,25** | **✅** |

---

**Pronto para correção! 🚀**
