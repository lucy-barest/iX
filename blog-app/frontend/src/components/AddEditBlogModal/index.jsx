import React, { useEffect, useMemo, useState } from "react";
import { Modal } from "bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Categories from "../Categories";
import FormImage from "../FormImage";

import { setAddBlog, setEditBlog } from "../../features/blogsSlice";

import useBlogs from "../../hooks/useBlogs";

export default function AddEditBlogModal() {
  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();
  const { createBlog, updateBlog } = useBlogs();

  const { addBlog, editBlog } = useSelector((state) => state.blogs);

  const { categories } = useSelector((state) => state.categories);

  const [blog, setBlog] = useState();
  const [image, setImage] = useState();

  const modalEl = document.getElementById("addEditModal");

  const addEditModal = useMemo(() => {
    return modalEl ? new Modal(modalEl) : null;
  }, [modalEl]);

  useEffect(() => {
    if (addBlog) {
      setBlog(addBlog);
      addEditModal?.show();
    } else if (editBlog) {
      setBlog(editBlog);
      addEditModal?.show();
    }
  }, [addBlog, editBlog, addEditModal]);

  const buildFormData = () => {
    const formData = new FormData();
    formData.append("id", blog.id);
    formData.append("image", blog.image);
    formData.append("title", blog.title);
    formData.append("description", blog.description);
    formData.append("categories", JSON.stringify(blog.categories));
    formData.append("content", JSON.stringify(blog.content));
    formData.append("authorId", user?._id);
    return formData;
  };

  const onSubmit = (e) => {
    e?.preventDefault();
    if (isFormValid()) {
      const blogForm = buildFormData();
      if (addBlog) {
        createBlog(blogForm);
      } else if (editBlog) {
        updateBlog(blogForm);
      }
      resetBlog();
      addEditModal?.hide();
    }
  };

  const resetBlog = () => {
    setBlog(null);
  };

  const isFormValid = () => {
    const form = document.getElementById("blogForm");
    form?.classList?.add("was-validated");
    return form?.checkValidity();
  };

  const onCloseModal = () => {
    resetBlog();
    onClose();
    addEditModal?.hide();
  };

  const onClose = () => {
    dispatch(setAddBlog(null));
    dispatch(setEditBlog(null));
  };

  const onImageChange = (e) => {
    if (e?.target?.files?.length) {
      const file = e.target.files[0];
      setImage(URL.createObjectURL(file));
      setBlog({ ...blog, image: file });
    }
  };

  return (
    <div>
      <div
        className="modal fade"
        id="addEditModal"
        aria-labelledby="addEditModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addEditModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onCloseModal}
              ></button>
            </div>
            <div className="modal-body">
              <form id="blogForm">
                <FormImage image={image} onChange={onImageChange} />
                <div className="input-group mb-3">
                  <label
                    className="input-group-text"
                    htmlFor="categoryInputSelect"
                  >
                    Categories
                  </label>
                  <select
                    className="form-select"
                    id="categoryInputSelect"
                    onChange={(e) => {
                      const category = categories?.find(
                        (x) => x.id === e.target.value
                      );
                      if (!category) {
                        return;
                      }
                      if (blog?.categories?.find((x) => x.id === category.id)) {
                        return;
                      }
                      const blogUpdate = {
                        ...blog,
                        categories: [...blog.categories, category],
                      };
                      setBlog(blogUpdate);
                    }}
                    required={editBlog ? false : true}
                  >
                    {categories?.map((category, index) => {
                      return (
                        <option key={index} value={category.id}>
                          {category.title}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="mb-3">
                  <Categories
                    blog={blog}
                    removeCategory={(category) => {
                      setBlog({
                        ...blog,
                        categories: blog?.categories.filter(
                          (x) => x.id !== category.id
                        ),
                      });
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={blog?.title}
                    onChange={(e) => {
                      setBlog({ ...blog, title: e.target.value });
                    }}
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    value={blog?.description}
                    onChange={(e) => {
                      setBlog({ ...blog, description: e.target.value });
                    }}
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <label htmlFor="description" className="form-label">
                  Content
                </label>
                {blog?.content?.map((section, index) => {
                  return (
                    <div className="p-3" key={index}>
                      <div className="mb-3">
                        <label
                          htmlFor={"sectionHeader" + index}
                          className="form-label"
                        >
                          Section Header
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id={"sectionHeader" + index}
                          value={section.sectionHeader}
                          onChange={(e) => {
                            const updatedContent = blog.content.map(
                              (section, secIndex) => {
                                if (index === secIndex) {
                                  return {
                                    ...section,
                                    sectionHeader: e.target.value,
                                  };
                                }
                                return section;
                              }
                            );
                            setBlog({ ...blog, content: updatedContent });
                          }}
                          required
                        />
                        <div className="valid-feedback">Looks good!</div>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor={"sectionText" + index}
                          className="form-label"
                        >
                          Section Text
                        </label>
                        <textarea
                          type="text"
                          className="form-control"
                          id={"sectionText" + index}
                          value={section.sectionText}
                          onChange={(e) => {
                            const updatedContent = blog.content.map(
                              (section, secIndex) => {
                                if (index === secIndex) {
                                  return {
                                    ...section,
                                    sectionText: e.target.value,
                                  };
                                }
                                return section;
                              }
                            );
                            setBlog({ ...blog, content: updatedContent });
                          }}
                          required
                        />
                        <div className="valid-feedback">Looks good!</div>
                      </div>
                    </div>
                  );
                })}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {blog?.content?.length > 0 && (
                    <button
                      type="button"
                      className="btn btn-danger"
                      style={{
                        position: "absolute",
                        bottom: "45px",
                        right: "10px",
                        zIndex: "1",
                      }}
                      onClick={() => {
                        const blogUpdate = {
                          ...blog,
                          content: blog?.content.slice(0, -1),
                        };
                        setBlog(blogUpdate);
                      }}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                      const blogUpdate = {
                        ...blog,
                        content: [
                          ...blog?.content,
                          { sectionHeader: "", sectionText: "" },
                        ],
                      };
                      setBlog(blogUpdate);
                    }}
                  >
                    <i className="bi bi-plus-circle"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onCloseModal}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={onSubmit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

AddEditBlogModal.prototype = {};

