/**
 * @author liuxw
 */
var asyn_load = function(url, pageNum, classic) {
	$.ajax({
		url : url,
		data : JSON.stringify({
			'pageNum' : pageNum,
			'classic' : classic
		}),
		type : 'post',
		contentType : 'application/json;charset=utf-8',
		success : function(html) {
			$("#section").empty();
			$("#section").append(html);
		}
	});
}

var Job = {
	config : $.extend(this.config, {
		recruitment : '社会招聘',
		area : '全部',
		position : '全部',
		pageNum:1
	}),
	setRecruitment : function(r) {
		this.config.Recruitment = r;
	},
	setPosition : function(p) {
		this.config.Position = p;
	},
	setArea : function(a) {
		this.config.Area = a;
	},
	getJobs : function(cfg) {
		this.config = $.extend(this.config, cfg);
		$.ajax({
			url : "/job/getJobData.do",
			type : 'post',
			contentType : 'application/json;charset=utf-8',
			data : JSON.stringify({
				'recruitment' : this.config.recruitment,
				'area' : this.config.area,
				'position' :this.config.position,
				'pageNum':this.config.pageNum
			}),
			success : function(html) {
				$("#jobs_content").empty();
				$("#jobs_content").append(html);
			}
		});
	}
}

function loadJobDetail(id){
	window.location.href="/job/jobDetail.html?id="+id;
}