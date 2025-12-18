import supabase from "../lib/supabase";

export async function tampilPlayer() {
  const { data, error } = await supabase.from("tb_player").select("*");

  if (error) throw error;
  return data;
}

export async function tambahPlayer(player) {
  const { data, error } = await supabase
    .from("tb_player")
    .insert([player])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function uploadPhoto(file) {
  const fileName = `${Date.now()}-${file.name}`;

  const { error } = await supabase.storage
    .from("player-photos")
    .upload(fileName, file);

  if (error) throw error;

  const { data } = supabase.storage
    .from("player-photos")
    .getPublicUrl(fileName);

  return data.publicUrl;
}

export async function editPlayer(id, fields) {
  const { data, error } = await supabase
    .from("tb_player")
    .update(fields)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deletePlayer(id) {
  const { error } = await supabase.from("tb_player").delete().eq("id", id);

  if (error) throw error;
}
