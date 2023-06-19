import { supabase } from "../lib/supabaseClient";

export const commentsCacheKey = "api/comments"

export const getComments = async (postId) => {
  const { data, error, status } = await supabase
    .from("comments")
    .select()
    .eq("post_id", postId)

  return { data, error, status };

};

export const addComment = async (_, { arg: newComment }) => {
  const { data, error, status } = await supabase
    .from("comments")
    .insert(newComment)
    .single()
  console.log(error)
  return { data, error, status }
};

export const removeComment = async (_, { arg: id }) => {
  const { data, error, status } = await supabase
    .from("comments")
    .delete()
    .single()
    .eq("id", id)

  return { data, error, status }
};