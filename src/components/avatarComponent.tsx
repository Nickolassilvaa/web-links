import { Avatar } from "./ui/avatar";
import Image from 'next/image'

interface AvatarProps {
  avatarUrl: string
}

export function AvatarComponent({ avatarUrl }: AvatarProps) {
  return (
    <Avatar className="w-8 h-8 md:w-10 md:h-10">
      <Image src={avatarUrl} alt="" width={500} height={500} />
    </Avatar>
  )
}
