export interface CourseCardProps {
    title: string;
    description: string;
    imageUrl: string;
    level?: string; 
}

const CourseCard = ({ title, description, imageUrl, level }: CourseCardProps) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="w-full h-48 bg-gray-200 relative">
             <img src={imageUrl} alt={title} className="w-full h-full object-cover"/>
             {level && <span className="absolute top-2 left-2 bg-unisa-blue text-white text-xs font-semibold px-2 py-1 rounded">{level}</span>}
        </div>
        <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-unisa-blue transition-colors">{title}</h3>
            <p className="text-gray-600 text-sm flex-grow">{description}</p>
        </div>
    </div>
);

export default CourseCard;
