import { Song } from "@/types"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers";

const getSongs = async (): Promise<Song[]> => {
  
  const supabase = createClientComponentClient(
  );
  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching songs:', error);
    return [];
  }

  return data as Song[] || [];
};

export default getSongs;
