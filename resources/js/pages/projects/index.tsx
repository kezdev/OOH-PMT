import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import {BreadcrumbItem} from "@/types";

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Projects', href: '/projects' },
];

interface Project {
    id: number;
    name: string;
    code: string;
}

interface PaginationLinks {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginationMeta {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    links: PaginationLinks[];
}

interface ProjectListProps {
    projects: {
        data: Project[];
        meta: PaginationMeta;
    };
}

const ProjectList = ({ projects }: ProjectListProps) => {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects" />
            <div className="flex flex-col p-4">

                <div className="overflow-x-auto bg-sidebar rounded">
                    {projects.data.map((project) => (
                        <a
                            key={project.id}
                            href={`/projects/${project.id}`}
                            className="flex items-center py-4 border-b last:border-0 px-6 hover:bg-sidebar-accent rounded cursor-pointer"
                        >
                            <span className="text-[10px] pr-4 text-gray-400">{project.code}</span>
                            <h1>{project.name}</h1>
                        </a>
                    ))}
                </div>

                {projects.meta.links && projects.meta.links.length > 0 && (
                    <div className="mt-4 flex flex-start space-x-2">
                        {projects.meta.links.map((link, index) =>
                            link.url ? (
                                <Link
                                    key={index}
                                    href={link.url}
                                    className={`px-3 py-1 border rounded ${link.active ? 'bg-blue-500 text-white' : ''}`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            ) : (
                                <span key={index}
                                      className="px-3 py-1 border rounded text-gray-400 opacity-25 cursor-not-allowed"
                                      dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            )
                        )}
                    </div>
                )}

            </div>
        </AppLayout>
    );
};

export default ProjectList;