import Link from "next/link";
import { getAllHandbooks } from "../../../lib/handbookApi";
import { Post } from "../../../types/Post";

type PostIndexProps = {
  notes: {
    [x: string]: Post[];
  };
};

const Index: React.FC<PostIndexProps> = ({ notes }) => {
  // console.log(Object.keys(notes));

  const dirSlugs: string[] = Object.keys(notes);

  // notes.get(keys[0]);
  return (
    <div>
      <h1>note index</h1>
      {dirSlugs.map((dirSlug, idx) => {
        return (
          <>
            <h2 key={idx}>{dirSlug}</h2>

            {notes[dirSlug].map((note, i) => {
              return (
                <Link
                  href={`/test/note/${dirSlug}/${note.slug}`}
                  key={i}
                  passHref
                >
                  <h3>{note.title}</h3>
                </Link>
              );
            })}
          </>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const notes = getAllHandbooks(["title", "slug"]);

  let keys = Array.from(notes.keys());

  let a: { [x: string]: Post[] } = {};

  keys.map((key) => {
    a[key] = notes.get(key) || [];
  });

  return {
    props: {
      notes: a,
    },
  };
};

export default Index;
