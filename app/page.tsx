'use client';

import { useState } from 'react';
import { LoginForm } from '@/components/auth/LoginForm';
import { Header } from '@/components/dashboard/Header';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { SalesChart } from '@/components/dashboard/SalesChart';
import { RegionChart } from '@/components/dashboard/RegionChart';
import { TopProducts } from '@/components/dashboard/TopProducts';
import { RecentTransactions } from '@/components/dashboard/RecentTransactions';
import { FilterPanel } from '@/components/dashboard/FilterPanel';
import { 
  DollarSign, 
  TrendingUp, 
  ShoppingCart, 
  Users,
  Package
} from 'lucide-react';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleFilterChange = (filters: any) => {
    console.log('Filters changed:', filters);
  };

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onLogout={handleLogout} />
      
      <main className="p-6">
        <div className="grid gap-6 mb-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Receita Total"
            value="R$298.500"
            change="+12.5%"
            changeType="positive"
            icon={DollarSign}
          />
          <MetricCard
            title="Vendas"
            value="1.247"
            change="+8.2%"
            changeType="positive"
            icon={TrendingUp}
          />
          <MetricCard
            title="Pedidos"
            value="1.963"
            change="+15.3%"
            changeType="positive"
            icon={ShoppingCart}
          />
          <MetricCard
            title="Clientes Ativos"
            value="892"
            change="+3.1%"
            changeType="positive"
            icon={Users}
          />
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-7">
          <FilterPanel onFilterChange={handleFilterChange} />
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-7">
          <SalesChart />
          <RegionChart />
        </div>

        <div className="grid gap-6 md:grid-cols-7">
          <TopProducts />
          <RecentTransactions />
        </div>
      </main>
    </div>
  );
}