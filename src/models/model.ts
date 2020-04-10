export class Model {
    userName: string;
    items: Array<TodoItem>;

    constructor() {
        this.userName = "Ahmet Tınastepe";
        this.items = [
            new TodoItem("Spor", true),
            new TodoItem("Kahvaltı", false),
            new TodoItem("Sinema", false)
        ];
    }
}

export class TodoItem {
    description: string;
    action: boolean;

    constructor(description, action) {
        this.description = description;
        this.action = action;
    }
}