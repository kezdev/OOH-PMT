import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Projects', href: '/projects' },
];

interface Project {
    id: number;
    name: string;
}

interface PaginationLinks {
    url: string | null;
    label: string;
    active: boolean;
}

interface ProjectListProps {
    projects: {
        data: Project[];
        links: PaginationLinks[];
    };
}

const ProjectList = ({ projects }: ProjectListProps) => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects" />
            <div className="flex flex-col p-4">
                <h1 className="text-2xl font-bold mb-4">Projects</h1>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">ID</th>
                            <th className="border p-2">Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {projects.data.map((project) => (
                            <tr key={project.id} className="border-b">
                                <td className="border p-2">{project.id}</td>
                                <td className="border p-2">{project.name}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="mt-4 flex justify-center space-x-2">
                    {projects.links.map((link, index) =>
                        link.url ? (
                            <Link
                                key={index}
                                href={link.url}
                                className={`px-3 py-1 border rounded ${link.active ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                dangerouslySetInnerHTML={{ __html: link.label }} // Laravel includes HTML entities
                            />
                        ) : (
                            <span key={index} className="px-3 py-1 border rounded text-gray-400">
                                {link.label}
                            </span>
                        )
                    )}
                </div>
            </div>
        </AppLayout>
    );
};

export default ProjectList;