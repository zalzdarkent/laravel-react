import React from 'react'

export default function Coba({ data }) {
    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">
                        <h2 className="font-semibold text-xl">Data Latihan</h2>
                        <p>
                            {data.map((item, index) => (
                                <div key={index}>
                                    <p>{item.testing}</p>
                                </div>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}