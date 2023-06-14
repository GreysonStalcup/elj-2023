import { motion } from "framer-motion";
interface BoardMembers {
  name: string;
  position: string;
  image?: string;
}

const officers: BoardMembers[] = [
  {
    name: "Deborah Dixon",
    position: "President",
    image: "/board/ddixon.png",
  },
  {
    name: "Shannon Stein",
    position: "Vice President",
    image: "/board/sstein.png",
  },
  {
    name: "Gail King",
    position: "CFO",
    image: "/board/gking.png",
  },
  {
    name: "Anne Beaumont",
    position: "Secretary",
    image: "/board/abeaumont.png",
  },
  {
    name: "Edward Swan",
    position: "Past President",
    image: "/board/eswan.png",
  },
];
const directors: BoardMembers[] = [
  {
    name: "Whitney Blackhurst",
    position: "Director",
  },
  {
    name: "James Crosby",
    position: "Director",
  },
  {
    name: "Elidia Dostal",
    position: "Director",
  },
  {
    name: "Brian Funk",
    position: "Director",
  },
  {
    name: "Diana Khoury",
    position: "Director",
  },
  {
    name: "Lana Manganiello",
    position: "Director",
  },
  {
    name: "Suzy Marinkovich",
    position: "Director",
  },
  {
    name: "Alana McMains",
    position: "Director",
  },
  {
    name: "Alejandro Moreno",
    position: "Director",
  },
  {
    name: "Kyle Overs",
    position: "Director",
  },
  {
    name: "Stephanie Reynolds",
    position: "Director",
  },
  {
    name: "Genevieve Sauter",
    position: "Director",
  },
  {
    name: "Scott Schindler",
    position: "Director",
  },
  {
    name: "Andrew Schouten",
    position: "Director",
  },
  {
    name: "Ruth Spillane",
    position: "Director",
  },
  {
    name: "Cassandra Thorson",
    position: "Director",
  },
];

export const Officers: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row justify-center items-center text-center gap-5 w-full flex-wrap"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      {officers.map((officer) => (
        <div
          key={officer.name}
          className="flex flex-col items-center justify-center w-3/4 p-5 md:w-1/6 mb-10 bg-slate-300 rounded-lg shadow-lg min-w-[300px]"
        >
          <img
            src={officer.image}
            alt={officer.name}
            className="rounded-full w-32 h-32"
          />
          <div className="text-center">
            <div className="text-xl font-bold">{officer.name}</div>
            <div className="text-2xl font-tangerine">{officer.position}</div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};
export const Directors: React.FC = () => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 items-center justify-center text-center grid-"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      {directors.map((director) => (
        <div
          key={director.name}
          className="flex flex-col items-center justify-center text-center pb-4"
        >
          <h4 className="text-xl">{director.name}</h4>
        </div>
      ))}
    </motion.div>
  );
};
