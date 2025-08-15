'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DivideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: typeof DivideIcon; // <- corrigido
}

export function MetricCard({ title, value, change, changeType, icon: Icon }: MetricCardProps) {
  const changeColor = {
    positive: 'text-green-600',
    negative: 'text-red-600',
    neutral: 'text-gray-600',
  }[changeType];

  const changeSymbol = {
    positive: '↗',
    negative: '↘',
    neutral: '→',
  }[changeType];

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
        <div className="p-2 bg-blue-100 rounded-lg">
          <Icon className="h-4 w-4 text-blue-600" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
        <p className={`text-xs flex items-center ${changeColor}`}>
          <span className="mr-1">{changeSymbol}</span>
          {change} desde o último mês
        </p>
      </CardContent>
    </Card>
  );
}
