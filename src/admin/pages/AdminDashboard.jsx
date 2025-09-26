import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'

const AdminDashboard = () => {
    return (
        <>
            <AdminHeader />
            <div className="md:grid grid-cols-5 gap-2">
                {/* Admin Sidebar  */}
                <div className=" col-span-1 ">
                    <AdminSidebar />
                </div>

                <div className="col-span-4">
                    AdminDashboard
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminDashboard
