import { createClient } from "@supabase/supabase-js";

const supabaseURL = 'https://gmuifsbcbbgfbaayoaxg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtdWlmc2JjYmJnZmJhYXlvYXhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4NzkwNjksImV4cCI6MjAzMTQ1NTA2OX0.9Tubn_FABZw0RECuKt5mte-EsBDg9YgHkqTmu8hQZxs'

export const supabase = createClient(supabaseURL, supabaseKey, {auth: {flowType: 'implicit'}});