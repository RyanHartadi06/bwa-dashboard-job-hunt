import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import React, { FC, useEffect, useRef } from "react";

interface CKEditorProps {
  form: any;
  name: string;
  editorLoaded?: boolean;
}

const CKEditor: FC<CKEditorProps> = ({ form, name, editorLoaded }) => {
  const editorRef = useRef<any>();
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
  }, []);

  return (
    <>
      {editorLoaded ? (
        <div className="w-1/2">
          <CKEditor
            editor={ClassicEditor}
            data={form.getValues(name)}
            onChange={(event: any, editor: any) => {
              form.setValue(name, editor.getData());
            }}
          />
          <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormMessage className="mt-3" />
              </FormItem>
            )}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default CKEditor;
