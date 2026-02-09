const editButtons = document.getElementsByClassName("btn-edit");
const commentText = document.getElementById("id_body");
const commentForm = document.getElementById("comment-form");
const submitButton = document.getElementById("submit-button");

const deleteModal = new bootstrap.Modal(document.getElementById("deleteModal"));
const deleteButtons = document.getElementsByClassName("btn-delete");
const deleteConfirm = document.getElementById("deleteConfirm");

for (let button of editButtons) {
    button.addEventListener("click", (e) => {
        let commentId = e.target.getAttribute("comment_id");
        let commentContent = document.getElementById(`comment${commentId}`).innerText;
        commentText.value = commentContent;
        submitButton.innerText = "Update";
        commentForm.setAttribute("action", `edit_comment/${commentId}`);
    });
}

/**
 * Initializes delete functionality for the provided delete buttons.
 * 
 * For each button in the `deleteButtons` collection:
 * - retrieves the associated comment's ID upon click.
 * - Updates the `deleteConfirm` link's href to point to the
 * deletion endpoint for the specific comment.
 * - Displays a confirmation modal (`deleteModal`) to prompt 
 * the user for confirmation before deletion.
 * 
 * This ensures that users have a chance to confirm their intent
 * to delete a comment, preventing accidental deletions.
 */


for (let button of deleteButtons) {
    button.addEventListener("click", (e) => {
        let commentId = e.target.getAttribute("comment_id");
        deleteConfirm.setAttribute("href", `delete_comment/${commentId}`);
        deleteModal.show();
    });
}