type Post = Record<"title" | "description" | "image", string> & {
  author: {
    name: string;
    date: string;
    avatar: string;
  }
}

type TPostCardProps = {
  post: Post
}
const PostCard = ({post}: TPostCardProps) => {
  return (
    <a className="block w-full lg:flex mb-10" href="#">
      <img
        className="w-full h-48 lg:w-48 opacity-80 object-cover lg:mr-4"
        src={post.image}
        alt="img"
        loading="lazy"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="dark:text-white mb-2 text-gray-700 font-bold text-2xl">{post.title}</h3>
          <p className="text-gray-700 dark:text-slate-400">{post.description}</p>
        </div>
        <div className="flex mt-3">
          <img className="h-10 w-10 rounded-full mr-2 object-cover" src={post.author.avatar} alt="author"/>
          <div>
            <p className="font-semibold text-gray-400 text-sm">{post.author.name}</p>
            <time className="text-gray-400 text-xs">{post.author.date}</time>
          </div>
        </div>
      </div>
    </a>
  );
};

export default PostCard;