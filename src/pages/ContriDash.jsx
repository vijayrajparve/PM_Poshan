import React from 'react'

const ContriDash = () => {
  return (
    <>
   <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sidebar handleLogout={handleLogout} />

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: "20px" }}>
        <DashboardContent />
      
      </div>
    </div>
    </>
  )
}

export default ContriDash