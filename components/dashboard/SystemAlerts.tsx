'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { systemAlerts } from '@/lib/mock-data';
import { Bell, Package, Target, Settings, X } from 'lucide-react';

export function SystemAlerts() {
  const getAlertIcon = (tipo: string) => {
    switch (tipo) {
      case 'estoque': return <Package className="w-4 h-4" />;
      case 'meta': return <Target className="w-4 h-4" />;
      case 'sistema': return <Settings className="w-4 h-4" />;
      default: return <Bell className="w-4 h-4" />;
    }
  };

  const getPriorityColor = (prioridade: string) => {
    switch (prioridade) {
      case 'alta': return 'bg-red-100 text-red-800 border-red-200';
      case 'media': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'baixa': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center justify-between">
          <div className="flex items-center">
            <Bell className="w-5 h-5 mr-2 text-orange-600" />
            Alertas do Sistema
          </div>
          <Badge variant="secondary">{systemAlerts.length}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {systemAlerts.map((alert) => (
            <div key={alert.id} className={`p-3 rounded-lg border ${getPriorityColor(alert.prioridade)}`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className="mt-0.5">
                    {getAlertIcon(alert.tipo)}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{alert.titulo}</div>
                    <div className="text-xs mt-1 opacity-80">{alert.mensagem}</div>
                    <div className="text-xs mt-2 opacity-60">
                      {new Date(alert.data).toLocaleString('pt-BR')}
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <X className="w-3 h-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <Button variant="outline" className="w-full" size="sm">
            Ver Todos os Alertas
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}