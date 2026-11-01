const tasks = [
  {
    id: 1,
    title: "Task1",
    priority: "low",
    completed: true,
    createdAt: "2026-09-28T19:46:21.370Z",
    tags: ["JS", "Learning", "practice"],
    assignee: "Kiran",
  },
  {
    id: 2,
    title: "Task2",
    priority: "high",
    completed: false,
    createdAt: "2026-09-28T19:46:21.370Z",
    tags: ["JS", "Learning"],
    assignee: "Kiran",
  },
  {
    id: 3,
    title: "Task3",
    priority: "mid",
    completed: false,
    createdAt: "2026-09-28T19:46:21.370Z",
    tags: ["JS", "practice"],
    assignee: "Kiran",
  },
];

const addTask = (title, priority, tags, assignee) => {
  // title validation
  if (typeof title !== "string" || title.trim().length === 0) {
    console.log("invalid title");
    return;
  }
  // priority validation
  const validPriorities = ["low", "mid", "high"];
  if (typeof priority !== "string" || priority.trim().length === 0) {
    return;
  }
  const checkPriority = priority.toLowerCase().trim();
  if (!validPriorities.includes(checkPriority)) {
    return;
  }

  // tags validation
  if (!Array.isArray(tags)) {
    return;
  }
  const tagResult = tags.every((tag) => {
    return typeof tag === "string" && tag.trim().length > 0;
  });
  if (!tagResult) {
    return;
  }
  const updatedTags = tags.map((tag) => {
    return tag.trim();
  });

  // assignee validation
  if (typeof assignee !== "string" || assignee.trim().length === 0) {
    console.log("invalid assignee");
    return;
  }

  // create new id.
  let largest = 0;
  for (let i = 0; i < tasks.length; i++) {
    if (largest < tasks[i].id) {
      largest = tasks[i].id;
    }
  }
  const id = largest + 1;

  const createdAt = new Date().toISOString();
  const newtask = {
    id,
    title: title.trim(),
    priority: checkPriority.trim(),
    completed: false,
    createdAt,
    tags: updatedTags,
    assignee: assignee.trim(),
  };

  tasks.push(newtask);
};

const deleteTask = (id) => {
  const newTasks = tasks.filter((task) => task.id !== id);

  if (newTasks.length === tasks.length) {
    return false;
  }

  tasks.splice(0, task.length, ...newTasks);
  return true;
};

const updateTask = (id, updates) => {
  // validationfor typeof object
  if (typeof updates !== "object" || updates === null || Array.isArray(updates))
    return false;

  // validation for protected fields
  const protectedFields = ["id", "createdAt"];
  const hasProtectedField = Object.keys(updates).some((key) => {
    return protectedFields.includes(key);
  });
  if (hasProtectedField) return false;

  // validation for allowed fields
  const allowedFields = ["title", "priority", "completed", "tags", "assignee"];
  const areFieldsAllowed = Object.keys(updates).every((key) => {
    return allowedFields.includes(key);
  });
  if (!areFieldsAllowed || Object.keys(updates).length === 0) return false;

  // values and normalization validation
  const normalizedUpdates = { ...updates };
  if (Object.hasOwn(updates, "title")) {
    if (
      typeof updates.title !== "string" ||
      updates.title.trim().length === 0
    ) {
      return false;
    }
    normalizedUpdates.title = updates.title.trim();
  }

  const validPriorities = ["low", "mid", "high"];
  if (Object.hasOwn(updates, "priority")) {
    if (
      typeof updates.priority !== "string" ||
      updates.priority.trim().length === 0 ||
      !validPriorities.includes(updates.priority.trim().toLowerCase())
    )
      return false;
    normalizedUpdates.priority = updates.priority.trim().toLowerCase();
  }

  if (
    Object.hasOwn(updates, "completed") &&
    typeof updates.completed !== "boolean"
  )
    return false;

  // normalized tags
  if (Object.hasOwn(updates, "tags")) {
    if (
      !Array.isArray(updates.tags) ||
      !updates.tags.every((tag) => {
        return typeof tag === "string" && tag.trim().length > 0;
      })
    )
      return false;

    normalizedUpdates.tags = updates.tags.map((tag) => tag.trim());
  }

  if (Object.hasOwn(updates, "assignee")) {
    if (
      typeof updates.assignee !== "string" ||
      updates.assignee.trim().length === 0
    ) {
      return false;
    }
    normalizedUpdates.assignee = updates.assignee.trim();
  }

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      tasks[i] = {
        ...tasks[i],
        ...normalizedUpdates,
      };
      return true;
    }
  }
  return false;
};

const completeTask = (id) => {
  let task = tasks.find((task) => task.id === id);
  if (!task) {
    return false;
  }
  task.completed = true;
  return true;
};

const filterTasks = (completed) => {
  return tasks.filter((task) => task.completed === completed)
}

const sortTasks = () => {
  const sortedTasks = [...tasks];
  sortedTasks.sort(
    (a,b) => {
      return b.createdAt.localeCompare(a.createdAt);
    }
  )
  return sortedTasks
}

const searchTask = (query) => {
  if(typeof query !== 'string') return [];
  const searchText = query.trim().toLocaleLowerCase();

  return tasks.filter((task) => 
    task.title.toLowerCase().includes(searchText)
  )
}

addTask("Learn callbacks", "high", ["JS", "callbacks"], "Kiran");
updateTask(1, { title: "Master JavaScript" });

console.log("taks: ", tasks);
