import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fuzggbzflowghqnnelyd.supabase.co'
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1emdnYnpmbG93Z2hxbm5lbHlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQyNjQ0NDgsImV4cCI6MjAxOTg0MDQ0OH0.3vsXBJ8mI3BqrDWhUEAxPW8cQ0CIhygocn9E4wKzx2I'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
