/*
interface IProject {
    name: string;
    icon: string;
    date: string;
    description: string;
}
*/

exports.projects = [
    {
        name: `"Dashmips" — MIPS Assembly Simulator`,
        icon: "nf-seti-python",
        date: "Jun '18 - Current",
        technologies: ["python", "regex", "mips"],
        description: `
            Command line Python package to simulate a
            MIPS program by interpreting assembly text.
            Future plans for an editor extension that
            enables MIPS debugging and visualization.
        `.trim()
    },
    {
        name: `"DASH" — Automated Interactive Course Orchestration`,
        icon: "nf-dev-git",
        date: "Aug '17 - Apr '18",
        technologies: ["python", "gitlab", "git"],
        description: `
            Interactive tool to assist deploying a private gitlab
            instance for the purpose of source submission along with assignment
            distribution.
        `.trim()
    },
    {
        name: `"Moon OS" — Operating System`,
        icon: "nf-custom-c",
        date: "Aug '17 - Dec '17",
        technologies: ["c", "x86_64", "shell", "memory allocator", "ahci", "qemu"],
        description: `
            64-bit operating system in C targeting the x86_64 platform.
            Features include
            context switching,
            AHCI driver
            virtual memory management,
            copy-on-write fork,
            and userspace processes.
            Tested on hardware.
        `.trim()
    },
    {
        name: `"Glitter" — Full Stack Social Networking Web App`,
        icon: "nf-mdi-nodejs", //"nf-dev-javascript_badge", //"nf-seti-javascript",
        date: "Jan '17 - May '17",
        technologies: ["nodejs", "ansible", "mongodb", "IAAS"],
        description: `
            RESTful social networking service written in NodeJS.
            The service was deployed to a private cloud using Ansible
            and scaled to respond to millions of client requests
            using multi-process clustering and a sharded MongoDB database.
        `.trim()
    },
    {
        name: `"Wolfie Script" — Original Scripting Language`,
        icon: "nf-seti-python",
        date: "May '16 - Aug '16",
        technologies: ["python", "ply", "AST"],
        description: `
            Original scripting language implemented
            using the Python PLY (yacc/lex) library with support for:
            duck type variables, shallow scoping, if/else statements,
            while loops.
        `.trim()
    },
    {
        name: `"Atomic Comics" — Comic Creation Web App`,
        icon: "nf-dev-angular",
        date: "Jan '16 - May '16",
        technologies: ["angularjs", "java", "HTML5 Canvas", "PAAS"],
        description: `
            AngularJS and Java web app deployed to PAAS environment.
            Features include
            saving user-generated content from HTML5 Canvas,
            publishing canvas contents to the landing page, and
            enabling users to modify saved work.
        `.trim()
    },
    {
        name: `"WolfieBall" — Fantasy Baseball Desktop Application`,
        icon: "nf-fae-java",
        date: "Jan '15 - May '15",
        technologies: ["java", "JSON", "multithreading"],
        description: `
            Desktop application written in Java and JavaFX
            that allowed users to load saved MLB JSON data,
            construct fantasy baseball teams manually, and
            auto-generate teams in a separate thread.
            Two years later helped professor win his MLB Fantasy League
            (Apr '17).
        `.trim()
    },
];
