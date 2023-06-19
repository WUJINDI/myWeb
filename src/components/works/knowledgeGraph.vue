<!-- 学科知识图谱模板 -->
<template>
  <div>
    <v-charts class="chart" :option="option" />
  </div>
</template>

<script>
export default {
  props: ['word', 'relationship', 'subjectName'],
  data() {
    return {
      nodeData: [],
      linkData: [],
    }
  },
  computed: {
    option() {
      return {
        tooltip: {
          formatter: function (params) {
            if (params.dataType === 'edge') {
              return '"' + params.data.source + '"到"' + params.data.target + '"的依存关系为：' + params.data.label.formatter
            }
            // return '节点：'+params.data.name +' 权重：'+params.data.value
          },
        },
        series: [
          {
            type: 'graph',
            layout: 'force', // 'circular','force'
            focusNodeAdjacency: true, // 当鼠标移动到节点上，突出显示节点以及节点的边和邻接节点
            draggable: true, // 指示节点是否可以拖动
            data: this.formatWordOccurrences(this.word),
            links: this.formatLinks(this.relationship),
            roam: true,

            label: {
              normal: {
                show: true,
              },
            },
            edgeSymbol: ['none', 'arrow'],
            edgeSymbolSize: 12,
            edgeLabel: {
              normal: {
                textStyle: {
                  fontSize: 15,
                },
              },
            },

            force: {
              layoutAnimation: true,
              repulsion: 8000,
              gravity: 0.1,
              edgeLength: [50, 800],
              initLayout: 'circular',
            },
            itemStyle: {
              normal: {
                borderColor: '#fff',
                borderWidth: 1,
                shadowBlur: 10,
              },
            },
            lineStyle: {
              normal: {
                opacity: 0.9,
                curveness: 0.3,
              },
            },
          },
        ],
      }
    },
  },
  methods: {
    /** 将统计后的单词转化成节点形式 */
    formatWordOccurrences(wordOccurrences) {
      const formattedOccurrences = []
      for (const word of wordOccurrences) {
        const formattedOccurrence = {
          name: word,
          //  value: count,
          // value: 300,
          symbolSize: word === this.subjectName ? 300 : 20, // 支持度越大，节点越大
        }

        formattedOccurrences.push(formattedOccurrence)
      }
      return formattedOccurrences
    },
    formatLinks(arr) {
      return arr.map((node) => {
        return {
          source: node.word1,
          target: node.word2,
          value: 1,
          label: {
            normal: {
              show: false,
              // formatter: function (x) {
              //   return node.dependency
              // }
              formatter: node.dependency,
            },
          },
          lineStyle: {
            normal: {
              width: 1,
              // width: 20 * (node.value - 0.65), // 可信度越高，连线越粗
              color: 'source',
            },
          },
        }
      })
    },
  },
}
</script>

<style scoped>
.chart {
  height: 1500px;
}
</style>
