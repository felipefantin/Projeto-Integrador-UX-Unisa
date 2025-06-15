import { AcademicCapIcon } from './Icons';

export interface VirtualClassCardProps {
    title: string;
    status: string;
    imageUrl: string;
    badge?: boolean;
}

const VirtualClassCard = ({ title, status, imageUrl, badge }: VirtualClassCardProps) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col relative group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="w-full h-40 bg-gray-200">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-md font-semibold text-gray-800 mb-1 group-hover:text-unisa-blue transition-colors">{title}</h3>
            <p className="text-xs text-gray-500">{status}</p>
        </div>
        {badge && (
            <div className="absolute top-2 right-2 bg-unisa-blue text-white p-1 rounded-full" title="Concluído ou Destaque">
                <AcademicCapIcon className="w-4 h-4" />
            </div>
        )}
    </div>
);

export default VirtualClassCard;
