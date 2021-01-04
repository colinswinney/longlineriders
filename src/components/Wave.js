import React from "react"

export default function Wave() {
    return (
        <>
            <div className="wave">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.84,68.58 L500.00,150.00 L0.00,150.00 Z"></path>
                </svg>
            </div>
            <div className="block"></div>
        </>
    )
}