import TamperController from 'core/controller/TamperController';
import TamperRequest from 'core/router/TamperRequest';

class ProjectRepository extends TamperController {
	run = (request: TamperRequest): void => {
		if (!document.location.href.match('Repository')) {
			document.location.href = document.location.href + '?visibleFields=%5B"Title"%2C"Repository"%2C"Labels"%2C"Reviewers"%2C"Assignees"%5D';
		}
	};
}

export default ProjectRepository;


