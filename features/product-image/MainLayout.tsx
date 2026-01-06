import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductAssistantTab from './ProductAssistantTab';
import HistoryTab from './HistoryTab';

const MainLayout: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-5xl mx-auto">
                    <Routes>
                        <Route path="/" element={<Navigate to="/product-assistant" replace />} />
                        <Route path="/product-assistant" element={<ProductAssistantTab />} />
                        <Route path="/history" element={<HistoryTab />} />
                        <Route path="*" element={<Navigate to="/product-assistant" replace />} />
                    </Routes>
                </div>
            </main>
        </div>
    );
};

export default MainLayout;
