# PERAK 2023: Open Recruitement Boilerplate

Task Link: perak.link/TugasOprecWebdev

This boilerplate already **provides** you the Prisma schemes and TRPC queries to develop the application, so you just have to implement the frond-end ([Next.js](https://nextjs.org/)) features of this application using the provided schemes and queries. You can add any schemes or queries if you think it's needed.

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`. Use [Next Stride](https://github.com/DJaegerScript/next-stride) to keep the consistency across your project structure and source code. If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our contact person and ask for help.
-   [Next.js](https://nextjs.org/)
-   [Prisma](https://prisma.io/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [tRPC](https://trpc.io/)
-   [Next Stride](https://github.com/DJaegerScript/next-stride)

## Queries and Mutations
You can check the TRPC routers inside `src/server/api/root.ts`
- **game** (`src/server/api/routers/game.ts`)
	- `getGames` : to GET all the games in the database (paymentInfos included) 
- **auth** (`src/server/api/routers/auth.ts`)
	- `getUserTypes` : to GET all the user types in the database (The user types you need to add is "Elemen" and "Mahasiswa")
	- `register` : to POST registration data to the database, the fields are:
		- name: `string`
		- contactInfo: `string`
		- nickname: `string`
		- npm: `string`
		- registerGameId: `string` (References Game)
		- typeId: `string` (References UserType)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:
-   [Documentation](https://create.t3.gg/)
-   [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials
You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

> Good luck, have fun!
