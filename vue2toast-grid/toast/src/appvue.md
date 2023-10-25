```
<template>
  <div class="container">
    <h1>🍞</h1>
    <p>
      columns :: data 이름 <br>
      
    </p>
    <grid
      :data="gridProps.data"
      :columns="gridProps.columns"
      :options="gridProps.options"
      :theme="gridProps.myTheme"
      @check="onCheck"
      @uncheck="onUnCheck"
      :rowHeaders="gridProps.rowHeaders"
      :columnOptions="gridProps.columnOptions"
    ></grid>
  </div>
</template>
<script>
import 'tui-grid/dist/tui-grid.css';
import { Grid } from '@toast-ui/vue-grid';

export default {
  components: {
    grid: Grid,
  },
  created() {
    this.gridProps = {
      rowHeaders: ['checkbox',],// 'rowNum'
      columnOptions: {
        resizable: true,
        frozenCount: 1,
      },
      columns: [
        {
          header: '이름',
          name: 'codeName',
          // editor: 'text',
        },
        {
          header: '코드',
          name: 'code',
        },
        {
          header: '비고',
          name: 'note',
        },
        // {
        //   header: 'editor Score',
        //   name: 'score',
        //   onBeforeChange(ev) {
        //     console.log('executes before the value changes : ', ev);
        //   },
        //   onAfterChange(ev) {
        //     console.log('executes after the value has changed : ', ev);
        //   },
        //   copyOptions: {
        //     useListItemText: true,
        //   },
        //   formatter: 'listItemText',
        //   editor: {
        //     type: 'radio',
        //     options: {
        //       listItems: [
        //         {
        //           text: '★☆☆☆☆',
        //           value: '1',
        //         },
        //         {
        //           text: '★★☆☆☆',
        //           value: '2',
        //         },
        //         {
        //           text: '★★★☆☆',
        //           value: '3',
        //         },
        //         {
        //           text: '★★★★☆',
        //           value: '4',
        //         },
        //         {
        //           text: '★★★★★',
        //           value: '5',
        //         },
        //       ],
        //     },
        //   },
        // },
      ],
      data: [
        {
          codeName: 'foo',
          code: '01',
          _attributes: {
            expanded: true // default: false
          },
          _children: [
            {
              code: '0100',
              codeName: 'qux'
            },
            // ...,
          ]
        },


      ],
      myTheme: {
        name: 'myTheme',
        value: {
          cell: {
            normal: {
              background: '#fff',
              border: '#e0e0e0',
            },
            header: {
              background: '#fff',
              border: '#e0e0e0',
            },
            editable: {
              background: '#fbfbfb',
              border: '#e0e0e0',
            },
          },
        },
      },
      options: {
        rowHeaders: ['checkbox'],
        treeColumnOptions: {
          name: 'codeName',// 하단폴더 연결
          useIcon: true,
          useCascadingCheckbox: true
        }
      },
    };
  },
  methods: {
    onCheck(ev) {
      console.log('check event: ', ev);
    },
    onUnCheck(ev) {
      console.log('uncheck event: ', ev);
    },
  },
};
</script>
<style>
@import 'https://uicdn.toast.com/tui-grid/latest/tui-grid.css';
</style>
```