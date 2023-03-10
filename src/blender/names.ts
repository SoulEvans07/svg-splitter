export const names: Record<string, Record<number, string>> = {
  A: {
    1: 'SEQ_SEQUENCER',
    2: 'SEQ_PREVIEW',
    3: 'SEQ_LUMA_WAVEFORM',
    4: 'SEQ_CHROMA_SCOPE',
    5: 'SEQ_HISTOGRAM',
    6: 'SEQ_SPLITVIEW',
    7: 'SEQ_STRIP_META',
    8: 'SEQ_STRIP_DUPLICATE',
    10: 'IMAGE_RGB',
    11: 'IMAGE_RGB_ALPHA',
    12: 'IMAGE_ALPHA',
    13: 'IMAGE_ZDEPTH',
    14: 'HANDLE_AUTOCLAMPED',
    15: 'HANDLE_AUTO',
    16: 'HANDLE_ALIGNED',
    17: 'HANDLE_VECTOR',
    18: 'HANDLE_FREE',
    22: 'VIEW_PERSPECTIVE',
    23: 'VIEW_ORTHO',
    24: 'VIEW_CAMERA',
    25: 'VIEW_PAN',
    26: 'VIEW_ZOOM',
  },
  B: {
    1: 'MATPLANE',
    2: 'MATSPHERE',
    3: 'MATCUBE',
    4: 'MONKEY',
    5: 'CURVES',
    6: 'ALIASED',
    7: 'ANTIALIASED',
    8: 'MAT_SPHERE_SKY',
    10: 'MATSHADERBALL',
    11: 'MATCLOTH',
    12: 'MATFLUID',
    13: 'WORDWRAP_OFF',
    14: 'WORDWRAP_ON',
    15: 'SYNTAX_OFF',
    16: 'SYNTAX_ON',
    17: 'LINENUMBERS_OFF',
    18: 'LINENUMBERS_ON',
    22: 'SCRIPTPLUGINS',
    23: 'DISC',
    24: 'DESKTOP',
    25: 'EXTERNAL_DRIVE',
    26: 'NETWORK_DRIVE',
  },
  C: {
    1: 'SORT_DESC',
    2: 'SORT_ASC',
    3: 'LINK_BLEND',
    4: 'APPEND_BLEND',
    5: 'IMPORT',
    6: 'EXPORT',
    14: 'LOOP_BACK',
    15: 'LOOP_FORWARDS',
    16: 'BACK',
    17: 'FORWARD',
    20: 'FILE_ARCHIVE',
    21: 'FILE_CACHE',
    22: 'FILE_VOLUME',
    23: 'FILE_3D',
    24: 'FILE_HIDDEN',
    25: 'FILE_BACKUP',
    26: 'DISK_DRIVE',
  },
  D: {
    1: 'SORTALPHA',
    2: 'SORTBYEXT',
    3: 'SORTTIME',
    4: 'SORTSIZE',
    5: 'SHORTDISPLAY',
    6: 'LONGDISPLAY',
    8: 'IMGDISPLAY',
    11: 'BOOKMARKS',
    12: 'FONTPREVIEW',
    13: 'FILTER',
    14: 'NEWFOLDER',
    15: 'FOLDER_REDIRECT',
    16: 'FILE_PARENT',
    17: 'FILE_REFRESH',
    18: 'FILE_FOLDER',
    19: 'FILE_BLANK',
    20: 'FILE_BLEND',
    21: 'FILE_IMAGE',
    22: 'FILE_MOVIE',
    23: 'FILE_SCRIPT',
    24: 'FILE_SOUND',
    25: 'FILE_FONT',
    26: 'FILE_TEXT',
  },
  E: {
    1: 'OUTLINER_OB_CURVES',
    2: 'OUTLINER_DATA_CURVES',
    3: 'CURVES_DATA',
    4: 'OUTLINER_OB_POINTCLOUD',
    5: 'OUTLINER_DATA_POINTCLOUD',
    6: 'POINTCLOUD_DATA',
    7: 'OUTLINER_OB_VOLUME',
    8: 'OUTLINER_DATA_VOLUME',
    9: 'VOLUME_DATA',
    23: 'CURRENT_FILE',
    24: 'HOME',
    25: 'DOCUMENTS',
    26: 'TEMP',
  },
  F: {
    1: 'SHADING_BBOX',
    2: 'SHADING_WIRE',
    3: 'SHADING_SOLID',
    4: 'SHADING_RENDERED',
    5: 'SHADING_TEXTURE',
    6: 'OVERLAY',
    7: 'XRAY',
    10: 'LOCKVIEW_OFF',
    11: 'LOCKVIEW_ON',
    13: 'AXIS_SIDE',
    14: 'AXIS_FRONT',
    15: 'AXIS_TOP',
    16: 'LOCK_ORIENTATION',
    17: 'ROTATE',
    18: 'BOID',
    19: 'DEPTH',
    20: 'DOT_EMPTY',
    21: 'DOT_FULL',
  },
  G: {
    1: 'COPYDOWN',
    2: 'PASTEDOWN',
    3: 'PASTEFLIPUP',
    4: 'PASTEFLIPDOWN',
    5: 'VIS_SEL_11',
    6: 'VIS_SEL_10',
    7: 'VIS_SEL_01',
    8: 'VIS_SEL_00',
    10: 'AUTOMERGE_OFF',
    11: 'AUTOMERGE_ON',
    13: 'UV_VERTEXSEL',
    14: 'UV_EDGESEL',
    15: 'UV_FACESEL',
    16: 'UV_ISLANDSEL',
    17: 'UV_SYNC_SELECT',
    18: 'GP_CAPS_FLAT',
    19: 'GP_CAPS_ROUND',
    20: 'FIXED_SIZE',
    21: 'TRANSFORM_ORIGINS',
    22: 'GIZMO',
    23: 'ORIENTATION_CURSOR',
    24: 'NORMALS_VERTEX',
    25: 'NORMALS_FACE',
    26: 'NORMALS_VERTEX_FACE',
  },
  H: {
    1: 'SNAP_FACE_NEAREST',
    2: 'SNAP_FACE_CENTER',
    3: 'SNAP_PERPENDICULAR',
    4: 'SNAP_MIDPOINT',
    5: 'SNAP_OFF',
    6: 'SNAP_ON',
    7: 'SNAP_NORMAL',
    8: 'SNAP_GRID',
    9: 'SNAP_VERTEX',
    10: 'SNAP_EDGE',
    11: 'SNAP_FACE',
    12: 'SNAP_VOLUME',
    13: 'SNAP_INCREMENT',
    14: 'STICKY_UVS_LOC',
    15: 'STICKY_UVS_DISABLE',
    16: 'STICKY_UVS_VERT',
    17: 'CLIPUV_DEHLT',
    18: 'CLIPUV_HLT',
    19: 'SNAP_PEEL_OBJECT',
    20: 'GRID',
    21: 'OBJECT_ORIGIN',
    22: 'ORIENTATION_GLOBAL',
    23: 'ORIENTATION_GIMBAL',
    24: 'ORIENTATION_LOCAL',
    25: 'ORIENTATION_NORMAL',
    26: 'ORIENTATION_VIEW',
  },
  I: {
    1: 'VERTEXSEL',
    2: 'EDGESEL',
    3: 'FACESEL',
    4: 'PIVOT_GROUP',
    5: 'CURSOR',
    6: 'PIVOT_BOUNDBOX',
    7: 'PIVOT_CURSOR',
    8: 'PIVOT_INDIVIDUAL',
    9: 'PIVOT_MEDIAN',
    10: 'PIVOT_ACTIVE',
    11: 'CENTER_ONLY',
    12: 'ROOTCURVE',
    13: 'SMOOTHCURVE',
    14: 'SPHERECURVE',
    15: 'INVERSESQUARECURVE',
    16: 'SHARPCURVE',
    17: 'LINCURVE',
    18: 'NOCURVE',
    19: 'RNDCURVE',
    20: 'PROP_OFF',
    21: 'PROP_ON',
    22: 'PROP_CON',
    23: 'PROP_PROJECTED',
    24: 'PARTICLE_POINT',
    25: 'PARTICLE_TIP',
    26: 'PARTICLE_PATH',
  },
  J: {
    1: 'SOLO_OFF',
    2: 'SOLO_ON',
    3: 'FRAME_PREV',
    4: 'FRAME_NEXT',
    5: 'NLA_PUSHDOWN',
    6: 'IPO_CONSTANT',
    7: 'IPO_LINEAR',
    8: 'IPO_BEZIER',
    9: 'IPO_SINE',
    10: 'IPO_QUAD',
    11: 'IPO_CUBIC',
    12: 'IPO_QUART',
    13: 'IPO_QUINT',
    14: 'IPO_EXPO',
    15: 'IPO_CIRC',
    16: 'IPO_BOUNCE',
    17: 'IPO_ELASTIC',
    18: 'IPO_BACK',
    19: 'IPO_EASE_IN',
    20: 'IPO_EASE_OUT',
    21: 'IPO_EASE_IN_OUT',
    22: 'NORMALIZE_FCURVES',
  },
  K: {
    1: 'REC',
    2: 'PLAY',
    3: 'FF',
    4: 'REW',
    5: 'PAUSE',
    6: 'PREV_KEYFRAME',
    7: 'NEXT_KEYFRAME',
    8: 'PLAY_SOUND',
    9: 'PLAY_REVERSE',
    10: 'PREVIEW_RANGE',
    11: 'ACTION_TWEAK',
    12: 'PMARKER_ACT',
    13: 'PMARKER_SEL',
    14: 'PMARKER',
    15: 'MARKER_HLT',
    16: 'MARKER',
    17: 'KEYFRAME_HLT',
    18: 'KEYFRAME',
    19: 'KEYINGSET',
    20: 'KEY_DEHLT',
    21: 'KEY_HLT',
    22: 'MUTE_IPO_OFF',
    23: 'MUTE_IPO_ON',
    24: 'EYE_CLOSED',
    25: 'EYE_OPEN',
    26: 'DRIVER',
  },
  L: {
    1: 'MOD_CLOTH',
    2: 'MOD_EXPLODE',
    3: 'MOD_FLUIDSIM',
    4: 'MOD_MULTIRES',
    5: 'MOD_FLUID',
    6: 'MOD_SOLIDIFY',
    7: 'MOD_SCREW',
    8: 'MOD_VERTEX_WEIGHT',
    9: 'MOD_DYNAMICPAINT',
    10: 'MOD_REMESH',
    11: 'MOD_OCEAN',
    12: 'MOD_WARP',
    13: 'MOD_SKIN',
    14: 'MOD_TRIANGULATE',
    15: 'MOD_WIREFRAME',
    16: 'MOD_DATA_TRANSFER',
    17: 'MOD_NORMALEDIT',
    18: 'MOD_PARTICLE_INSTANCE',
    19: 'MOD_HUE_SATURATION',
    20: 'MOD_NOISE',
    21: 'MOD_OFFSET',
    22: 'MOD_SIMPLIFY',
    23: 'MOD_THICKNESS',
    24: 'MOD_INSTANCE',
    25: 'MOD_TIME',
    26: 'MOD_OPACITY',
  },
  M: {
    1: 'MODIFIER_DATA',
    2: 'MOD_WAVE',
    3: 'MOD_BUILD',
    4: 'MOD_DECIM',
    5: 'MOD_MIRROR',
    6: 'MOD_SOFT',
    7: 'MOD_SUBSURF',
    8: 'HOOK',
    9: 'MOD_PHYSICS',
    10: 'MOD_PARTICLES',
    11: 'MOD_BOOLEAN',
    12: 'MOD_EDGESPLIT',
    13: 'MOD_ARRAY',
    14: 'MOD_UVPROJECT',
    15: 'MOD_DISPLACE',
    16: 'MOD_CURVE',
    17: 'MOD_LATTICE',
    18: 'MOD_TINT',
    19: 'MOD_ARMATURE',
    20: 'MOD_SHRINKWRAP',
    21: 'MOD_CAST',
    22: 'MOD_MESHDEFORM',
    23: 'MOD_BEVEL',
    24: 'MOD_SMOOTH',
    25: 'MOD_SIMPLEDEFORM',
    26: 'MOD_MASK',
  },
  N: {
    1: 'CON_CAMERASOLVER',
    2: 'CON_FOLLOWTRACK',
    3: 'CON_OBJECTSOLVER',
    4: 'CON_LOCLIKE',
    5: 'CON_ROTLIKE',
    6: 'CON_SIZELIKE',
    7: 'CON_TRANSLIKE',
    8: 'CON_DISTLIMIT',
    9: 'CON_LOCLIMIT',
    10: 'CON_ROTLIMIT',
    11: 'CON_SIZELIMIT',
    12: 'CON_SAMEVOL',
    13: 'CON_TRANSFORM',
    14: 'CON_TRANSFORM_CACHE',
    15: 'CON_CLAMPTO',
    16: 'CON_KINEMATIC',
    17: 'CON_LOCKTRACK',
    18: 'CON_SPLINEIK',
    19: 'CON_STRETCHTO',
    20: 'CON_TRACKTO',
    21: 'CON_ARMATURE',
    22: 'CON_CHILDOF',
    23: 'CON_FLOOR',
    24: 'CON_FOLLOWPATH',
    25: 'CON_PIVOT',
    26: 'CON_SHRINKWRAP',
  },
  O: {
    1: 'ALIGN_LEFT',
    2: 'ALIGN_CENTER',
    3: 'ALIGN_RIGHT',
    4: 'ALIGN_JUSTIFY',
    5: 'ALIGN_FLUSH',
    6: 'ALIGN_TOP',
    7: 'ALIGN_MIDDLE',
    8: 'ALIGN_BOTTOM',
    9: 'BOLD',
    10: 'ITALIC',
    11: 'UNDERLINE',
    12: 'SMALL_CAPS',
    15: 'CON_ACTION',
    17: 'MOD_ENVELOPE',
    18: 'MOD_OUTLINE',
    19: 'MOD_LENGTH',
    20: 'MOD_DASH',
    21: 'MOD_LINEART',
    23: 'HOLDOUT_OFF',
    24: 'HOLDOUT_ON',
    25: 'INDIRECT_ONLY_OFF',
    26: 'INDIRECT_ONLY_ON',
  },
  P: {
    4: 'NODE_INSERT_OFF',
    5: 'NODE_INSERT_ON',
    6: 'NODE_TOP',
    7: 'NODE_SIDE',
    8: 'NODE_CORNER',
    9: 'ANCHOR_TOP',
    10: 'ANCHOR_BOTTOM',
    11: 'ANCHOR_LEFT',
    12: 'ANCHOR_RIGHT',
    13: 'ANCHOR_CENTER',
    22: 'SELECT_SET',
    23: 'SELECT_EXTEND',
    24: 'SELECT_SUBTRACT',
    25: 'SELECT_INTERSECT',
    26: 'SELECT_DIFFERENCE',
  },
  Q: {
    1: 'FORCE_PUSH',
    2: 'FORCE_WIND',
    3: 'FORCE_VORTEX',
    4: 'FORCE_MAGNETIC',
    5: 'FORCE_HARMONIC',
    6: 'FORCE_CHARGE',
    7: 'FORCE_LENNARDJONES',
    8: 'FORCE_TEXTURE',
    9: 'FORCE_CURVE',
    10: 'FORCE_BOID',
    11: 'FORCE_TURBULENCE',
    12: 'FORCE_DRAG',
    13: 'FORCE_FLUIDFLOW',
    16: 'RIGID_BODY',
    17: 'RIGID_BODY_CONSTRAINT',
    24: 'IMAGE_PLANE',
    25: 'IMAGE_BACKGROUND',
    26: 'IMAGE_REFERENCE',
  },
  R: {
    1: 'SURFACE_NCURVE',
    2: 'SURFACE_NCIRCLE',
    3: 'SURFACE_NSURFACE',
    4: 'SURFACE_NCYLINDER',
    5: 'SURFACE_NSPHERE',
    6: 'SURFACE_NTORUS',
    7: 'EMPTY_AXIS',
    8: 'STROKE',
    9: 'EMPTY_ARROWS',
    10: 'CURVE_BEZCURVE',
    11: 'CURVE_BEZCIRCLE',
    12: 'CURVE_NCURVE',
    13: 'CURVE_NCIRCLE',
    14: 'CURVE_PATH',
    15: 'LIGHTPROBE_CUBEMAP',
    16: 'LIGHTPROBE_PLANAR',
    17: 'LIGHTPROBE_GRID',
    20: 'COLOR_RED',
    21: 'COLOR_GREEN',
    22: 'COLOR_BLUE',
    23: 'TRIA_RIGHT_BAR',
    24: 'TRIA_DOWN_BAR',
    25: 'TRIA_LEFT_BAR',
    26: 'TRIA_UP_BAR',
  },
  S: {
    1: 'MESH_PLANE',
    2: 'MESH_CUBE',
    3: 'MESH_CIRCLE',
    4: 'MESH_UVSPHERE',
    5: 'MESH_ICOSPHERE',
    6: 'MESH_GRID',
    7: 'MESH_MONKEY',
    8: 'MESH_CYLINDER',
    9: 'MESH_TORUS',
    10: 'MESH_CONE',
    11: 'MESH_CAPSULE',
    12: 'EMPTY_SINGLE_ARROW',
    13: 'LIGHT_POINT',
    14: 'LIGHT_SUN',
    15: 'LIGHT_SPOT',
    16: 'LIGHT_HEMI',
    17: 'LIGHT_AREA',
    18: 'CUBE',
    19: 'SPHERE',
    20: 'CONE',
    21: 'META_PLANE',
    22: 'META_CUBE',
    23: 'META_BALL',
    24: 'META_ELLIPSOID',
    25: 'META_CAPSULE',
  },
  T: {
    1: 'OUTLINER_DATA_EMPTY',
    2: 'OUTLINER_DATA_MESH',
    3: 'OUTLINER_DATA_CURVE',
    4: 'OUTLINER_DATA_LATTICE',
    5: 'OUTLINER_DATA_META',
    6: 'OUTLINER_DATA_LIGHT',
    7: 'OUTLINER_DATA_CAMERA',
    8: 'OUTLINER_DATA_ARMATURE',
    9: 'OUTLINER_DATA_FONT',
    10: 'OUTLINER_DATA_SURFACE',
    11: 'OUTLINER_DATA_SPEAKER',
    12: 'OUTLINER_DATA_LIGHTPROBE',
    13: 'OUTLINER_DATA_GP_LAYER',
    14: 'OUTLINER_DATA_GREASEPENCIL',
    15: 'GP_SELECT_POINTS',
    16: 'GP_SELECT_STROKES',
    17: 'GP_MULTIFRAME_EDITING',
    18: 'GP_ONLY_SELECTED',
    19: 'GP_SELECT_BETWEEN_STROKES',
    20: 'MODIFIER_OFF',
    21: 'MODIFIER_ON',
    22: 'ONIONSKIN_OFF',
    23: 'ONIONSKIN_ON',
    24: 'RESTRICT_VIEW_ON',
    25: 'RESTRICT_VIEW_OFF',
    26: 'RESTRICT_INSTANCED_ON',
  },
  U: {
    1: 'OUTLINER_OB_EMPTY',
    2: 'OUTLINER_OB_MESH',
    3: 'OUTLINER_OB_CURVE',
    4: 'OUTLINER_OB_LATTICE',
    5: 'OUTLINER_OB_META',
    6: 'OUTLINER_OB_LIGHT',
    7: 'OUTLINER_OB_CAMERA',
    8: 'OUTLINER_OB_ARMATURE',
    9: 'OUTLINER_OB_FONT',
    10: 'OUTLINER_OB_SURFACE',
    11: 'OUTLINER_OB_SPEAKER',
    12: 'OUTLINER_OB_FORCE_FIELD',
    13: 'OUTLINER_OB_GROUP_INSTANCE',
    14: 'OUTLINER_OB_GREASEPENCIL',
    15: 'OUTLINER_OB_LIGHTPROBE',
    16: 'OUTLINER_OB_IMAGE',
    17: 'OUTLINER_COLLECTION',
    18: 'RESTRICT_COLOR_OFF',
    19: 'RESTRICT_COLOR_ON',
    20: 'HIDE_ON',
    21: 'HIDE_OFF',
    22: 'RESTRICT_SELECT_ON',
    23: 'RESTRICT_SELECT_OFF',
    24: 'RESTRICT_RENDER_ON',
    25: 'RESTRICT_RENDER_OFF',
    26: 'RESTRICT_INSTANCED_OFF',
  },
  V: {
    1: 'MOUSE_LMB',
    2: 'MOUSE_MMB',
    3: 'MOUSE_RMB',
    4: 'MOUSE_MOVE',
    5: 'MOUSE_LMB_DRAG',
    6: 'MOUSE_MMB_DRAG',
    7: 'MOUSE_RMB_DRAG',
    8: 'MEMORY',
    9: 'PRESET_NEW',
    10: 'INPUT_FIELD',
    11: 'DECORATE',
    12: 'DECORATE_KEYFRAME',
    13: 'DECORATE_ANIMATE',
    14: 'DECORATE_DRIVER',
    15: 'DECORATE_LINKED',
    16: 'DECORATE_LIBRARY_OVERRIDE',
    17: 'DECORATE_UNLOCKED',
    18: 'DECORATE_LOCKED',
    19: 'DECORATE_OVERRIDE',
    20: 'FUND',
    21: 'TRACKER_DATA',
    22: 'HEART',
    23: 'ORPHAN_DATA',
    24: 'USER',
    25: 'SYSTEM',
    26: 'SETTINGS',
  },
  W: {
    1: 'BRUSH_DATA',
    2: 'IMAGE_DATA',
    3: 'FILE',
    4: 'FCURVE',
    5: 'FONT_DATA',
    6: 'RENDER_RESULT',
    7: 'SURFACE_DATA',
    8: 'EMPTY_DATA',
    9: 'PRESET',
    10: 'RENDER_ANIMATION',
    11: 'RENDER_STILL',
    12: 'LIBRARY_DATA_BROKEN',
    13: 'BOIDS',
    14: 'STRANDS',

    16: 'GREASEPENCIL',
    17: 'LINE_DATA',
    18: 'LIBRARY_DATA_OVERRIDE',
    19: 'GROUP_BONE',
    20: 'GROUP_VERTEX',
    21: 'GROUP_VCOL',
    22: 'GROUP_UVS',
    23: 'FACE_MAPS',
    24: 'CLAPPERBOARD_PLAY',
    25: 'RNA',
    26: 'RNA_ADD',
  },
  X: {
    1: 'SCENE_DATA',
    2: 'RENDERLAYERS',
    3: 'WORLD_DATA',
    4: 'OBJECT_DATA',
    5: 'MESH_DATA',
    6: 'CURVE_DATA',
    7: 'META_DATA',
    8: 'LATTICE_DATA',
    9: 'LIGHT_DATA',
    10: 'MATERIAL_DATA',
    11: 'TEXTURE_DATA',
    12: 'ANIM_DATA',
    13: 'CAMERA_DATA',
    14: 'PARTICLE_DATA',
    15: 'LIBRARY_DATA_DIRECT',
    16: 'GROUP',
    17: 'ARMATURE_DATA',
    18: 'COMMUNITY',
    19: 'BONE_DATA',
    20: 'CONSTRAINT',
    21: 'SHAPEKEY_DATA',
    22: 'CONSTRAINT_BONE',
    23: 'CAMERA_STEREO',
    24: 'PACKAGE',
    25: 'UGLYPACKAGE',
    26: 'EXPERIMENTAL',
  },
  Y: {
    1: 'OBJECT_DATAMODE',
    2: 'EDITMODE_HLT',
    3: 'UV_DATA',
    4: 'VPAINT_HLT',
    5: 'TPAINT_HLT',
    6: 'WPAINT_HLT',
    7: 'SCULPTMODE_HLT',
    8: 'POSE_HLT',
    9: 'PARTICLEMODE',
    17: 'TRACKING',
    18: 'TRACKING_BACKWARDS',
    19: 'TRACKING_FORWARDS',
    20: 'TRACKING_BACKWARDS_SINGLE',
    21: 'TRACKING_FORWARDS_SINGLE',
    22: 'TRACKING_CLEAR_BACKWARDS',
    23: 'TRACKING_CLEAR_FORWARDS',
    24: 'TRACKING_REFINE_BACKWARDS',
    25: 'TRACKING_REFINE_FORWARDS',
  },
  Z: {
    1: 'VIEW3D',
    2: 'GRAPH',
    3: 'OUTLINER',
    4: 'PROPERTIES',
    5: 'FILEBROWSER',
    6: 'IMAGE',
    7: 'INFO',
    8: 'SEQUENCE',
    9: 'TEXT',
    10: 'SPREADSHEET',
    11: 'SOUND',
    12: 'ACTION',
    13: 'NLA',
    14: 'PREFERENCES',
    15: 'TIME',
    16: 'NODETREE',
    17: 'GEOMETRY_NODES',
    18: 'CONSOLE',
    20: 'TRACKER',
    21: 'ASSET_MANAGER',
    22: 'NODE_COMPOSITING',
    23: 'NODE_TEXTURE',
    24: 'NODE_MATERIAL',
    25: 'UV',
  },
  AA: {
    1: 'LIGHT',
    2: 'MATERIAL',
    3: 'TEXTURE',
    4: 'ANIM',
    5: 'WORLD',
    6: 'SCENE',
    7: 'OUTPUT',
    10: 'SCRIPT',
    11: 'PARTICLES',
    12: 'PHYSICS',
    13: 'SPEAKER',
    15: 'TOOL_SETTINGS',
    16: 'SHADERFX',
    17: 'MODIFIER',
    18: 'BLANK1',
    25: 'FAKE_USER_OFF',
    26: 'FAKE_USER_ON',
  },
  BA: {
    1: 'HELP',
    2: 'GHOST_ENABLED',
    3: 'COLOR',
    4: 'UNLINKED',
    5: 'LINKED',
    6: 'HAND',
    7: 'ZOOM_ALL',
    8: 'ZOOM_SELECTED',
    9: 'ZOOM_PREVIOUS',
    10: 'ZOOM_IN',
    11: 'ZOOM_OUT',
    12: 'DRIVER_DISTANCE',
    13: 'DRIVER_ROTATIONAL_DIFFERENCE',
    14: 'DRIVER_TRANSFORM',
    15: 'FREEZE',
    16: 'STYLUS_PRESSURE',
    17: 'GHOST_DISABLED',
    18: 'FILE_NEW',
    19: 'FILE_TICK',
    20: 'QUIT',
    21: 'URL',
    22: 'RECOVER_LAST',
    23: 'THREE_DOTS',
    24: 'FULLSCREEN_ENTER',
    25: 'FULLSCREEN_EXIT',
    26: 'BRUSHES_ALL',
  },
  CA: {
    1: 'WINDOW',
    2: 'WORKSPACE',
    3: 'RIGHTARROW_THIN',
    4: 'BORDERMOVE',
    5: 'VIEWZOOM',
    6: 'ADD',
    7: 'REMOVE',
    8: 'PANEL_CLOSE',
    9: 'COPY_ID',
    10: 'EYEDROPPER',
    11: 'CHECKMARK',
    12: 'AUTO',
    13: 'CHECKBOX_DEHLT',
    14: 'CHECKBOX_HLT',
    15: 'UNLOCKED',
    16: 'LOCKED',
    17: 'UNPINNED',
    18: 'PINNED',
    19: 'SCREEN_BACK',
    20: 'RIGHTARROW',
    21: 'DOWNARROW_HLT',
    22: 'FCURVE_SNAPSHOT',
    23: 'OBJECT_HIDDEN',
    24: 'TOPBAR',
    25: 'STATUSBAR',
    26: 'PLUGIN',
  },
  DA: {
    2: 'QUESTION',
    3: 'ERROR',
    4: 'CANCEL',
    5: 'TRIA_RIGHT',
    6: 'TRIA_DOWN',
    7: 'TRIA_LEFT',
    8: 'TRIA_UP',
    9: 'ARROW_LEFTRIGHT',
    10: 'PLUS',
    11: 'DISCLOSURE_TRI_RIGHT',
    12: 'DISCLOSURE_TRI_DOWN',
    13: 'RADIOBUT_OFF',
    14: 'RADIOBUT_ON',
    15: 'MENU_PANEL',
    16: 'BLENDER',
    17: 'GRIP',
    18: 'DOT',
    19: 'COLLAPSEMENU',
    20: 'X',
    21: 'DUPLICATE',
    22: 'TRASH',
    23: 'COLLECTION_NEW',
    24: 'OPTIONS',
    25: 'NODE',
    26: 'NODE_SEL',
  },
};

// MATPLANE
// MATSPHERE
// MATCUBE
// MONKEY
// CURVES
// ALIASED
// ANTIALIASED
// MAT_SPHERE_SKY
// MATSHADERBALL
// MATCLOTH
// MATFLUID
// WORDWRAP_OFF
// WORDWRAP_ON
// SYNTAX_OFF
// SYNTAX_ON
// LINENUMBERS_OFF
// LINENUMBERS_ON
// SCRIPTPLUGINS
// DISC
// DESKTOP
// EXTERNAL_DRIVE
// NETWORK_DRIVE

// SORT_DESC
// SORT_ASC
// LINK_BLEND
// APPEND_BLEND
// IMPORT
// EXPORT
// LOOP_BACK
// LOOP_FORWARDS
// BACK
// FORWARD
// FILE_ARCHIVE
// FILE_CACHE
// FILE_VOLUME
// FILE_3D
// FILE_HIDDEN
// FILE_BACKUP
// DISK_DRIVE
