'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { inventoryData } from '@/lib/mock-data';
import { Package, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export function InventoryAlert() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Normal': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'Baixo': return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      case 'Crítico': return <XCircle className="w-4 h-4 text-red-600" />;
      default: return <Package className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Normal': return 'bg-green-100 text-green-800';
      case 'Baixo': return 'bg-yellow-100 text-yellow-800';
      case 'Crítico': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center justify-between">
          <div className="flex items-center">
            <Package className="w-5 h-5 mr-2 text-blue-600" />
            Controle de Estoque
          </div>
          <Button variant="outline" size="sm">
            Ver Todos
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {inventoryData.map((item) => (
            <div key={item.produto} className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                {getStatusIcon(item.status)}
                <div>
                  <div className="font-medium text-sm">{item.produto}</div>
                  <div className="text-xs text-gray-500">
                    {item.categoria} • Última entrada: {new Date(item.ultimaEntrada).toLocaleDateString('pt-BR')}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-sm font-bold">{item.estoque} unidades</div>
                  <div className="text-xs text-gray-500">
                    Min: {item.minimo} • Max: {item.maximo}
                  </div>
                </div>
                <Badge className={getStatusColor(item.status)}>
                  {item.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-900">Valor Total do Estoque</p>
              <p className="text-xs text-blue-700">Baseado no preço de venda atual</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-blue-900">
                R${inventoryData.reduce((total, item) => total + (item.estoque * item.valor), 0).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}