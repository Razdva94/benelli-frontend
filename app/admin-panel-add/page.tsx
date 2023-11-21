import React from 'react';
import AddMoto from '@/components/AddMoto/AddMoto';
import { IsAdmin } from '@/components/IsAdmin/IsAdmin';

export const metadata = {
  robots: "noindex, nofollow"
 }

async function AdminPanelAdd() {
  const session = await IsAdmin();
  if (session?.user) {
    return <AddMoto />;
  } else {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          Администратор не аутентифицирован
        </div>
    );
  }
}

export default AdminPanelAdd;
