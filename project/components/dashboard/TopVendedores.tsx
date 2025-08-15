'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { topVendedores } from '@/lib/mock-data';
import { TrendingUp, Target, Award } from 'lucide-react';

export function TopVendedores() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center">
          <Award className="w-5 h-5 mr-2 text-yellow-600" />
          Top Vendedores
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topVendedores.map((vendedor, index) => (
            <div key={vendedor.nome} className="p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {vendedor.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{vendedor.nome}</div>
                    <div className="text-xs text-gray-500">{vendedor.pedidos} pedidos</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm">R${vendedor.vendas.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">Meta: R${vendedor.meta.toLocaleString()}</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Progresso da Meta</span>
                  <span>{((vendedor.vendas / vendedor.meta) * 100).toFixed(1)}%</span>
                </div>
                <Progress 
                  value={(vendedor.vendas / vendedor.meta) * 100} 
                  className="h-2"
                />
              </div>
              
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                <div className="flex items-center space-x-4 text-xs text-gray-600">
                  <span className="flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {vendedor.conversao}%
                  </span>
                  <span className="flex items-center">
                    <Target className="w-3 h-3 mr-1" />
                    R${vendedor.comissao.toLocaleString()}
                  </span>
                </div>
                <Badge variant={vendedor.vendas >= vendedor.meta ? "default" : "secondary"}>
                  {vendedor.vendas >= vendedor.meta ? "Meta Atingida" : "Em Progresso"}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}