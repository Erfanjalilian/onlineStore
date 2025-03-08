import Sidebar from '../../components/Sidebar/Sidebar';
import ProductsSection from '../../components/ProductsSection/ProductsSection';
import OrdersSection from '../../components/OrdersSection/OrdersSection';
import UsersSection from '../../components/UsersSection/UsersSection';
import SettingsSection from '../../components/SettingsSection/SettingsSection';

export default function AdminPanel() {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      <Sidebar />
      <main className="flex-1 p-8">
        <ProductsSection />
        <OrdersSection />
        <UsersSection />
        <SettingsSection />
      </main>
    </div>
  );
}