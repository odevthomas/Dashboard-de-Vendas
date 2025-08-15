'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { salesData } from '@/lib/mock-data';
import { TrendingUp } from 'lucide-react';

export function SalesChart() {
  return (
    <Card className="col-span-7">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
          Evolução de Vendas e Metas
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
            <XAxis 
              dataKey="mes" 
              className="text-sm"
              tick={{ fill: '#6B7280' }}
            />
            <YAxis 
              className="text-sm"
              tick={{ fill: '#6B7280' }}
              tickFormatter={(value) => `R$${value / 1000}K`}
            />
            <Tooltip 
              formatter={(value: any, name: string) => [
                `R$${value.toLocaleString()}`, 
                name === 'vendas' ? 'Vendas' : 
                name === 'receita' ? 'Receita' : 
                name === 'meta' ? 'Meta' : 'Pedidos'
              ]}
              labelFormatter={(label) => `Mês: ${label}`}
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
            />
            <Area
              type="monotone"
              dataKey="meta"
              stroke="#E5E7EB"
              fill="#F3F4F6"
              fillOpacity={0.3}
            />
            <Line 
              type="monotone" 
              dataKey="vendas" 
              stroke="#3B82F6" 
              strokeWidth={4}
              dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, stroke: '#3B82F6', strokeWidth: 2 }}
            />
            <Line 
              type="monotone" 
              dataKey="receita" 
              stroke="#10B981" 
              strokeWidth={4}
              dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, stroke: '#10B981', strokeWidth: 2 }}
            />
            <Line 
              type="monotone" 
              dataKey="meta" 
              stroke="#6B7280" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}