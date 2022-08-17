export default function Image(props) {
    return (
        <div className="rounded-xl p-2 bg-neutral-200 hover:drop-shadow-xl transition-all">
          <img src={props.urls.full} alt={props.user}
               loading='lazy'
               className="max-h-72 w-full object-cover rounded-xl"
          />
          <div className="">
            <img src={props.user.profile_image.large} alt={props.user.name} loading="lazy" 
                 className="w-14 rounded-full mt-5"
            />
            <p className="mt-1 font-semibold text-base">{props.user.name}</p>
          </div>
          <p className="text-right"><a href={`https://instagram.com/${props.user.instagram_username}`}>@{props.user.instagram_username}</a></p>
          <p className="text-right">{props.likes} likes</p>
        </div>
    )
}