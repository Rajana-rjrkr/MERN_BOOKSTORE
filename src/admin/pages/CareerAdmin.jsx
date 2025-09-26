import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'

const CareerAdmin = () => {
    return (
        <>
            <AdminHeader />
            <div className="md:grid grid-cols-5 gap-2">
                {/* Admin Sidebar  */}
                <div className=" col-span-1 ">
                    <AdminSidebar />
                </div>

                <div className="col-span-4">
                    Career Admin
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CareerAdmin
