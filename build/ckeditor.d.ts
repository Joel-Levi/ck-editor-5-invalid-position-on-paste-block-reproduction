/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import type { EditorConfig } from '@ckeditor/ckeditor5-core';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { ImageBlock } from '@ckeditor/ckeditor5-image';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { Undo } from '@ckeditor/ckeditor5-undo';
import { LinkImageEditing, LinkEditing } from '@ckeditor/ckeditor5-link';
import { ListEditing } from '@ckeditor/ckeditor5-list';
declare class Editor extends ClassicEditor {
    static builtinPlugins: (typeof Essentials | typeof ImageBlock | typeof LinkEditing | typeof LinkImageEditing | typeof Paragraph | typeof ListEditing | typeof Undo)[];
    static defaultConfig: EditorConfig;
}
export default Editor;
