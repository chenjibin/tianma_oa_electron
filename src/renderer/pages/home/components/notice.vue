<template>
    <Card class="sys-notice">
        <!--<p class="sys-notice-title">天马大小事</p>-->
        <Row>
            <Col :span="12">
                <Table height="254"
                       :columns="columns"
                       :data="pageData.list"
                       :loading="tableLoading"
                       :row-class-name="_rowClassName"
                       @on-row-click="_checkDetails"
                       class="sys-notice-table"></Table>
                <Page
                    :total="pageData.totalCount"
                    size="small"
                    :page-size="pageData.pageSize"
                    @on-change="pageChangeHandler"></Page>
            </Col>
            <Col :span="12">
                <system-info></system-info>
            </Col>
        </Row>

        <Modal v-model="modelFlag" width="740" :mask-closable="false">
            <p slot="header" style="color:#495060;text-align:center;font-size: 18px">
                <span>{{noticeData.title}}</span>
            </p>
            <div class="" v-html="noticeData.content" style="margin: 0 auto;width: 690px;font-size: 16px"></div>
            <div slot="footer">
            </div>
        </Modal>
        <Modal :value="!!mustRead.length" width="740" :mask-closable="false">
            <p slot="header" style="color:#495060;text-align:center;font-size: 18px">
                <span>未读公告</span>
            </p>
            <Tabs :value="'notice-' + mustRead[0].id" v-if="mustRead.length">
                <TabPane :label="item.title"
                         :name="'notice-' + item.id"
                         v-for="item in mustRead"
                         :key="'notice-' + item.id">
                    <div class="" v-html="item.content" style="margin: 0 auto;width: 690px;font-size: 16px"></div>
                </TabPane>
            </Tabs>
            <div slot="footer">
            </div>
        </Modal>
    </Card>
</template>
<style lang="less">
    .ivu-table .row-cursor {
        cursor: pointer;
    }
    .sys-notice {
        margin-bottom: 3px;
        &-title {
            margin-bottom: 10px;
            font-size: 18px;
            font-weight: 700;
        }
        &-table {
            margin-bottom: 10px;
        }
    }

</style>
<script>
    import moment from 'moment';
    import pageMixin from '@/mixins/pageMixin';
    import systemInfo from './systemInfo';
    export default {
        mixins: [pageMixin],
        data () {
            return {
                modelFlag: false,
                noticeData: {
                    title: '',
                    content: ''
                },
                columns: [
                    {
                        title: '公告',
                        key: 'title'
                    },
                    {
                        title: '时间',
                        key: 'nottime',
                        width: 100,
                        align: 'center',
                        render: (h, params) => {
                            let time = moment(params.row.nottime).format('YYYY-MM-DD');
                            return h('span', time);
                        }
                    }
                ]
            };
        },
        computed: {
            mustRead() {
                return this.$store.state.user.mustRead;
            }
        },
        created() {
            this.getNoticeInfo();
            this.$store.commit('getNoticeMustRead');
        },
        methods: {
            pageChangeHandler(page) {
                this.pageData.page = page;
                this.getNoticeInfo();
            },
            getNoticeInfo() {
                this.loading = true;
                let data = {};
                data.type = 1;
                this.getList('/notice/diaodongInfo', data);
            },
            _checkDetails(rowData) {
                this.noticeData.content = rowData.content;
                this.noticeData.title = rowData.title;
                this.modelFlag = true;
            },
            _rowClassName() {
                return 'row-cursor';
            }
        },
        components: {
            systemInfo
        }
    };
</script>
