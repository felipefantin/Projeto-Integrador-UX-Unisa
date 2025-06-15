import React from 'react';

export const SearchIcon = ({ className = "w-6 h-6" }: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
);

export const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

export const CloseIcon = ({ className = "w-6 h-6" }: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);

export const ChevronLeftIcon = ({ className = "w-5 h-5"}: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
);

export const ChevronRightIcon = ({ className = "w-5 h-5"}: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
);

export const PlusIcon = ({ className = "w-5 h-5"}: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);

export const PaperAirplaneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
);

export const ChevronDownIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
);

export const AcademicCapIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M11.708 2.057c.507-.302 1.079-.302 1.586 0l7.292 4.353a.75.75 0 0 1 .414.652v5.03c0 3.308-2.014 6.248-4.917 7.55a.75.75 0 0 1-.58-.024l-2.032-.887a.75.75 0 0 0-.58.025l-2.031.887a.75.75 0 0 1-.581.024c-2.903-1.302-4.917-4.242-4.917-7.55V7.062a.75.75 0 0 1 .414-.652l7.292-4.353Z" />
        <path d="m5.373 8.352 6.127 3.66V17.25l-5.71-2.141a.75.75 0 0 1-.416-.653V8.352Z" />
        <path d="m18.627 8.352-6.127 3.66V17.25l5.71-2.141a.75.75 0 0 0 .416-.653V8.352Z" />
    </svg>
);

export const BuildingLibraryIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.265 18.623A7.72 7.72 0 0 0 12 19.5a8.217 8.217 0 0 0 3.561-1.015 2.25 2.25 0 0 1-.902-1.806 7.512 7.512 0 0 0-3.316-1.782.75.75 0 0 0-.587.025l-.029.014a5.249 5.249 0 0 1-2.583-.024.75.75 0 0 0-.582.025 7.512 7.512 0 0 0-3.316 1.782 2.25 2.25 0 0 1-.902 1.806Zm1.44-8.083a.75.75 0 0 0 .582-.025l.029-.014a5.249 5.249 0 0 1 2.583.024.75.75 0 0 0 .587-.025l.029-.014a5.249 5.249 0 0 1 2.583.024.75.75 0 0 0 .587-.025l1.468-.733a.75.75 0 0 0 .029-1.316l-4.13-2.36a.75.75 0 0 0-.696 0l-4.13 2.36a.75.75 0 0 0 .029 1.316l1.468.733Z" />
        <path fillRule="evenodd" d="M3 8.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 8.25Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
    </svg>
);

export const BeakerIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M10.5 3.75a2.25 2.25 0 0 0-2.25 2.25v3.165c0 .324-.048.643-.142.945l-.089.297-.173.575-.174.576-.057.19-.041.135a13.33 13.33 0 0 0-1.042 3.868c0 2.16.033 4.298.098 6.425a.75.75 0 0 0 .749.749H17.25a.75.75 0 0 0 .749-.749c.065-2.126.098-4.264.098-6.424a13.333 13.333 0 0 0-1.042-3.868l-.041-.135-.057-.19-.174-.576-.173-.575-.089-.297A2.235 2.235 0 0 1 15.75 9.165V6a2.25 2.25 0 0 0-2.25-2.25h-3Zm.036 6.644a.75.75 0 0 0-.174-1.066 5.253 5.253 0 0 1 0-7.424.75.75 0 0 0 1.06-1.06 6.753 6.753 0 0 0 0 9.548.75.75 0 0 0-.885-.008Z" clipRule="evenodd" />
    </svg>
);

export const UserGroupIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.104.75.75 0 0 0 .42-1.283 4.125 4.125 0 0 0-3.277-2.477c-.596.344-1.213.639-1.84.86Z" />
    </svg>
);

export const PresentationChartBarIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6.75a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5h-3v-1.5h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375Zm6 6.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0v-4.5Zm3.75-1.5a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Zm3.75-2.25a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V6Z" />
    </svg>
);
