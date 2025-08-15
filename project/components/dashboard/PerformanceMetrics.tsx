'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { performanceMetrics } from '@/lib/mock-data';
import { 
  TrendingUp, 
  Target, 
  Users, 
  ShoppingCart, 
  RotateCcw, 
  Star,
  UserPlus,
  UserCheck
} from 'lucide-react';

export function PerformanceMetrics() {
  const progressoMeta = (performanceMetrics.vendasHoje / performanceMetrics.metaHoje) * 100;

  return (
    <Card className="col-span-7">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
          Métricas de Performance - Hoje
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Meta do Dia */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">Meta do Dia</span>
              </div>
              <span className="text-xs text-gray-500">{progressoMeta.toFixed(1)}%</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>R${performanceMetrics.vendasHoje.toLocaleString()}</span>
                <span className="text-gray-500">R${performanceMetrics.metaHoje.toLocaleString()}</span>
              </div>
              <Progress value={progressoMeta} className="h-2" />
            </div>
          </div>

          {/* Pedidos e Ticket Médio */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ShoppingCart className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium">Pedidos</span>
              </div>
              <span className="text-lg font-bold">{performanceMetrics.pedidosHoje}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Ticket Médio</span>
              <span className="text-sm font-semibold">R${performanceMetrics.ticketMedio}</span>
            </div>
          </div>

          {/* Clientes */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <UserPlus className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">Novos</span>
              </div>
              <span className="text-lg font-bold text-green-600">{performanceMetrics.clientesNovos}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <UserCheck className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">Recorrentes</span>
              </div>
              <span className="text-lg font-bold text-blue-600">{performanceMetrics.clientesRecorrentes}</span>
            </div>
          </div>

          {/* Indicadores */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium">Conversão</span>
              </div>
              <span className="text-lg font-bold">{performanceMetrics.conversao}%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-600" />
                <span className="text-sm font-medium">Satisfação</span>
              </div>
              <span className="text-lg font-bold">{performanceMetrics.satisfacao}/5</span>
            </div>
          </div>
        </div>

        {/* Resumo de Problemas */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <RotateCcw className="w-4 h-4 text-red-600" />
                <span className="text-sm font-medium text-red-800">Cancelamentos</span>
              </div>
              <span className="text-lg font-bold text-red-600">{performanceMetrics.cancelamentos}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <RotateCcw className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium text-orange-800">Devoluções</span>
              </div>
              <span className="text-lg font-bold text-orange-600">{performanceMetrics.devolucoes}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}