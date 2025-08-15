'use client';

import { Button } from '@/components/ui/button';
import { LogOut, Settings, Bell, User } from 'lucide-react';

interface HeaderProps {
  onLogout: () => void;
}

export function Header({ onLogout }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Painel de Vendas</h1>
          <p className="text-gray-600 text-sm">Gestão completa de vendas e performance</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-right mr-4">
            <p className="text-sm font-medium text-gray-900">Administrador</p>
            <p className="text-xs text-gray-500">Último acesso: hoje às 14:30</p>
          </div>
          <Button variant="outline" size="sm">
            <span className="relative">
            <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </span>
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm">
            <User className="w-4 h-4 mr-2" />
            Perfil
          </Button>
          <Button variant="outline" size="sm" onClick={onLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </div>
    </header>
  );
}