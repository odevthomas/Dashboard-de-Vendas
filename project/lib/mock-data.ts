// Dados de vendas mensais
export const salesData = [
  { mes: 'Jan', vendas: 125000, receita: 98000, pedidos: 342, meta: 120000 },
  { mes: 'Fev', vendas: 142000, receita: 115000, pedidos: 398, meta: 130000 },
  { mes: 'Mar', vendas: 158000, receita: 128000, pedidos: 445, meta: 140000 },
  { mes: 'Abr', vendas: 134000, receita: 108000, pedidos: 378, meta: 135000 },
  { mes: 'Mai', vendas: 189000, receita: 152000, pedidos: 523, meta: 150000 },
  { mes: 'Jun', vendas: 215000, receita: 178000, pedidos: 612, meta: 160000 },
  { mes: 'Jul', vendas: 198000, receita: 165000, pedidos: 567, meta: 170000 },
  { mes: 'Ago', vendas: 234000, receita: 195000, pedidos: 678, meta: 180000 },
  { mes: 'Set', vendas: 267000, receita: 218000, pedidos: 745, meta: 190000 },
  { mes: 'Out', vendas: 289000, receita: 238000, pedidos: 823, meta: 200000 },
  { mes: 'Nov', vendas: 312000, receita: 265000, pedidos: 892, meta: 210000 },
  { mes: 'Dez', vendas: 345000, receita: 298000, pedidos: 967, meta: 220000 },
];

// Produtos mais vendidos
export const topProducts = [
  { 
    nome: 'iPhone 15 Pro Max', 
    vendas: 2850, 
    receita: 3420000, 
    categoria: 'Smartphones',
    margem: 28.5,
    estoque: 145,
    crescimento: 15.2
  },
  { 
    nome: 'MacBook Air M3', 
    vendas: 1920, 
    receita: 2304000, 
    categoria: 'Notebooks',
    margem: 22.8,
    estoque: 89,
    crescimento: 8.7
  },
  { 
    nome: 'AirPods Pro 2ª Gen', 
    vendas: 4150, 
    receita: 1245000, 
    categoria: 'Áudio',
    margem: 35.2,
    estoque: 234,
    crescimento: 22.1
  },
  { 
    nome: 'iPad Pro 12.9"', 
    vendas: 1680, 
    receita: 2016000, 
    categoria: 'Tablets',
    margem: 25.4,
    estoque: 67,
    crescimento: -3.2
  },
  { 
    nome: 'Apple Watch Series 9', 
    vendas: 2340, 
    receita: 1404000, 
    categoria: 'Wearables',
    margem: 31.7,
    estoque: 178,
    crescimento: 12.8
  },
];

// Transações recentes
export const recentTransactions = [
  { 
    id: 'TXN-2024-001', 
    cliente: 'Maria Silva Santos', 
    produto: 'iPhone 15 Pro Max 256GB', 
    valor: 8999, 
    data: '2024-01-15T14:30:00', 
    status: 'Aprovado',
    vendedor: 'Carlos Oliveira',
    comissao: 450,
    metodo: 'Cartão de Crédito'
  },
  { 
    id: 'TXN-2024-002', 
    cliente: 'João Pedro Lima', 
    produto: 'MacBook Air M3 512GB', 
    valor: 12999, 
    data: '2024-01-15T13:45:00', 
    status: 'Processando',
    vendedor: 'Ana Costa',
    comissao: 650,
    metodo: 'PIX'
  },
  { 
    id: 'TXN-2024-003', 
    cliente: 'Fernanda Rodrigues', 
    produto: 'AirPods Pro 2ª Geração', 
    valor: 2199, 
    data: '2024-01-15T12:20:00', 
    status: 'Aprovado',
    vendedor: 'Pedro Martins',
    comissao: 110,
    metodo: 'Cartão de Débito'
  },
  { 
    id: 'TXN-2024-004', 
    cliente: 'Roberto Almeida', 
    produto: 'iPad Pro 12.9" 1TB', 
    valor: 15999, 
    data: '2024-01-15T11:15:00', 
    status: 'Aprovado',
    vendedor: 'Juliana Santos',
    comissao: 800,
    metodo: 'Boleto'
  },
  { 
    id: 'TXN-2024-005', 
    cliente: 'Camila Ferreira', 
    produto: 'Apple Watch Series 9 GPS', 
    valor: 3999, 
    data: '2024-01-15T10:30:00', 
    status: 'Cancelado',
    vendedor: 'Marcos Silva',
    comissao: 0,
    metodo: 'Cartão de Crédito'
  },
  { 
    id: 'TXN-2024-006', 
    cliente: 'Lucas Barbosa', 
    produto: 'iPhone 15 128GB', 
    valor: 6999, 
    data: '2024-01-14T16:45:00', 
    status: 'Aprovado',
    vendedor: 'Carla Mendes',
    comissao: 350,
    metodo: 'PIX'
  },
];

// Vendas por região
export const regionData = [
  { nome: 'São Paulo', valor: 42, vendas: 1450000, clientes: 12500, lojas: 25 },
  { nome: 'Rio de Janeiro', valor: 18, vendas: 620000, clientes: 5200, lojas: 12 },
  { nome: 'Minas Gerais', valor: 12, vendas: 415000, clientes: 3800, lojas: 8 },
  { nome: 'Paraná', valor: 8, vendas: 275000, clientes: 2100, lojas: 5 },
  { nome: 'Rio Grande do Sul', valor: 7, vendas: 240000, clientes: 1900, lojas: 4 },
  { nome: 'Bahia', valor: 6, vendas: 205000, clientes: 1600, lojas: 3 },
  { nome: 'Outros Estados', valor: 7, vendas: 245000, clientes: 2000, lojas: 8 },
];

// Vendedores top
export const topVendedores = [
  {
    nome: 'Carlos Oliveira',
    vendas: 145000,
    meta: 120000,
    comissao: 7250,
    pedidos: 89,
    conversao: 68.5,
    avatar: 'CO'
  },
  {
    nome: 'Ana Costa',
    vendas: 132000,
    meta: 115000,
    comissao: 6600,
    pedidos: 76,
    conversao: 72.1,
    avatar: 'AC'
  },
  {
    nome: 'Pedro Martins',
    vendas: 128000,
    meta: 110000,
    comissao: 6400,
    pedidos: 82,
    conversao: 65.8,
    avatar: 'PM'
  },
  {
    nome: 'Juliana Santos',
    vendas: 119000,
    meta: 105000,
    comissao: 5950,
    pedidos: 71,
    conversao: 69.3,
    avatar: 'JS'
  },
  {
    nome: 'Marcos Silva',
    vendas: 98000,
    meta: 100000,
    comissao: 4900,
    pedidos: 63,
    conversao: 61.2,
    avatar: 'MS'
  },
];

// Dados de inventário
export const inventoryData = [
  {
    produto: 'iPhone 15 Pro Max',
    estoque: 145,
    minimo: 50,
    maximo: 200,
    valor: 8999,
    categoria: 'Smartphones',
    fornecedor: 'Apple Inc.',
    ultimaEntrada: '2024-01-10',
    status: 'Normal'
  },
  {
    produto: 'MacBook Air M3',
    estoque: 23,
    minimo: 30,
    maximo: 80,
    valor: 12999,
    categoria: 'Notebooks',
    fornecedor: 'Apple Inc.',
    ultimaEntrada: '2024-01-08',
    status: 'Baixo'
  },
  {
    produto: 'AirPods Pro 2ª Gen',
    estoque: 234,
    minimo: 100,
    maximo: 300,
    valor: 2199,
    categoria: 'Áudio',
    fornecedor: 'Apple Inc.',
    ultimaEntrada: '2024-01-12',
    status: 'Normal'
  },
  {
    produto: 'iPad Pro 12.9"',
    estoque: 12,
    minimo: 25,
    maximo: 60,
    valor: 15999,
    categoria: 'Tablets',
    fornecedor: 'Apple Inc.',
    ultimaEntrada: '2024-01-05',
    status: 'Crítico'
  },
];

// Métricas de performance
export const performanceMetrics = {
  vendasHoje: 45600,
  metaHoje: 50000,
  pedidosHoje: 127,
  ticketMedio: 359,
  conversao: 3.2,
  clientesNovos: 23,
  clientesRecorrentes: 104,
  cancelamentos: 8,
  devolucoes: 3,
  satisfacao: 4.7
};

// Alertas do sistema
export const systemAlerts = [
  {
    id: 1,
    tipo: 'estoque',
    titulo: 'Estoque Baixo',
    mensagem: 'iPad Pro 12.9" com apenas 12 unidades em estoque',
    prioridade: 'alta',
    data: '2024-01-15T09:30:00'
  },
  {
    id: 2,
    tipo: 'meta',
    titulo: 'Meta Atingida',
    mensagem: 'Carlos Oliveira atingiu 120% da meta mensal',
    prioridade: 'media',
    data: '2024-01-15T08:15:00'
  },
  {
    id: 3,
    tipo: 'sistema',
    titulo: 'Backup Concluído',
    mensagem: 'Backup automático dos dados realizado com sucesso',
    prioridade: 'baixa',
    data: '2024-01-15T06:00:00'
  },
];