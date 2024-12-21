const employees = [
  {
    id: 1,
    firstname: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Prepare sales report",
        description: "Prepare the quarterly sales report for the management meeting.",
        date: "2024-01-15",
        category: "Sales",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Organize team meeting",
        description: "Schedule and organize the weekly team sync-up meeting.",
        date: "2024-01-16",
        category: "Management",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        title: "Submit expense reports",
        description: "Submit all pending expense reports for December.",
        date: "2024-01-10",
        category: "Finance",
      },
    ],
  },
  {
    id: 2,
    firstname: "Ishita",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update product catalog",
        description: "Add the latest product details to the online catalog.",
        date: "2024-01-20",
        category: "Product",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Review customer feedback",
        description: "Analyze customer feedback from Q4.",
        date: "2024-01-18",
        category: "Customer Service",
      },
    ],
  },
  {
    id: 3,
    firstname: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design new marketing campaign",
        description: "Draft the marketing strategy for the upcoming product launch.",
        date: "2024-01-25",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Finalize vendor contracts",
        description: "Negotiate and finalize vendor agreements for 2024.",
        date: "2024-01-15",
        category: "Procurement",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Conduct safety training",
        description: "Organize mandatory safety training for all employees.",
        date: "2024-01-28",
        category: "HR",
      },
    ],
  },
  {
    id: 4,
    firstname: "Ananya",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 2,
      completed: 0,
      failed: 1,
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: true,
        title: "Prepare audit documents",
        description: "Compile all necessary documents for the annual audit.",
        date: "2024-01-22",
        category: "Finance",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Plan company retreat",
        description: "Organize a company retreat for team bonding activities.",
        date: "2024-02-10",
        category: "HR",
      },
    ],
  },
  {
    id: 5,
    firstname: "Kunal",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Research competitor trends",
        description: "Gather insights on competitors' strategies for the upcoming quarter.",
        date: "2024-01-30",
        category: "Research",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update training materials",
        description: "Revise training materials for the onboarding program.",
        date: "2024-01-15",
        category: "HR",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    firstname: "Vikram",
    email: "admin@example.com",
    password: "123",
  },
];


  
  export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees) )
    localStorage.setItem('admin',JSON.stringify(admin) )
  }

  export const getLocalStorage=()=>{
   const employees=JSON.parse(localStorage.getItem('employees'))
   const admin=JSON.parse(localStorage.getItem('admin'))
   return {employees,admin}
   
  }