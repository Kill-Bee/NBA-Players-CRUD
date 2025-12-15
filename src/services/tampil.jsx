import supabase from '../lib/supabase'

export async function tampilPlayer() {
  const { data, error } = await supabase
    .from('tb_player')
    .select('*')

  if (error) throw error
  return data
}
