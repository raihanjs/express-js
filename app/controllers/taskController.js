// Create TASK
export const createTask = async (req,res) => {    
    return res.json({message: "Task Created Successfully"})
}
// Read TASK
export const readTask = async (req,res) => {
    return res.json({message: "Task Read Successfully"})
}
// Update TASK
export const updateTask = async (req,res) => {
    return res.json({message: "Task Updated Successfully"})
}
// Delete TASK
export const deleteTask = async (req,res) => {
    return res.json({message: "Task Deleted Successfully"})
}