abstract class TaskManager {
    abstract addTask(task: string): void;
    abstract listTasks(): string[];
}

interface Task {
    name: string;
    type: 'project' | 'daily';
}

class Project extends TaskManager {
    private tasks: Task[] = [];

    addTask(taskName: string): void {
        if (!this.tasks.find(t => t.name === taskName && t.type === 'project')) {
            this.tasks.push({ name: taskName, type: 'project' });
        }
    }

    listTasks(): string[] {
        return this.tasks.filter(t => t.type === 'project').map(t => t.name);
    }
}

class DailyTasks extends TaskManager {
    private tasks: Task[] = [];

    addTask(taskName: string): void {
        if (!this.tasks.find(t => t.name === taskName && t.type === 'daily')) {
            this.tasks.push({ name: taskName, type: 'daily' });
        }
    }

    listTasks(): string[] {
        return this.tasks.filter(t => t.type === 'daily').map(t => t.name);
    }
}


const projectTasks = new Project();
projectTasks.addTask("Configurar servidor");
projectTasks.addTask("Configurar servidor"); 
console.log(projectTasks.listTasks());

const dailyTasks = new DailyTasks();
dailyTasks.addTask("Tomar café");
dailyTasks.addTask("Responder e-mails");
console.log(dailyTasks.listTasks());