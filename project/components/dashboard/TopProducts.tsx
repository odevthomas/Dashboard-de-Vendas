'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { topProducts } from '@/lib/mock-data';

export function TopProducts() {
  const maxVendas = Math.max(...topProducts.map(p => p.vendas));

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Top Produtos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topProducts.map((product, index) => (
            <div key={product.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-sm font-medium">{product.name}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold">R${product.receita.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">{product.vendas} vendas</div>
                </div>
              </div>
              <Progress 
                value={(product.vendas / maxVendas) * 100} 
                className="h-2"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}